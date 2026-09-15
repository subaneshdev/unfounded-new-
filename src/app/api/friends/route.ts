import { NextResponse } from "next/server";
import type { FriendsFormData } from "@/types/friends";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const data: FriendsFormData = await req.json();

    // Basic validation
    if (!data.fullName || !data.email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    if (!data.linkedin) {
      return NextResponse.json(
        { error: "A primary profile link (LinkedIn or GitHub) is required." },
        { status: 400 }
      );
    }

    const applicantId = `FOU-${Date.now().toString(36).toUpperCase()}`;

    // 1. Insert into Supabase database
    const { data: dbRecord, error: sbError } = await supabase
      .from("friends_applications")
      .insert({
        applicant_id: applicantId,
        full_name: data.fullName.trim(),
        email: data.email.trim().toLowerCase(),
        country_code: data.countryCode || "+91",
        phone_number: data.phoneNumber || "",
        whatsapp_consent: data.whatsappConsent ?? true,
        email_consent: data.emailConsent ?? true,
        linkedin: data.linkedin.trim(),
        other_social: data.otherSocial || "",
        selected_categories: data.selectedCategories || [],
        selected_roles: data.selectedRoles || [],
        primary_portfolio: data.primaryPortfolio || "",
        secondary_portfolio: data.secondaryPortfolio || "",
        tertiary_portfolio: data.tertiaryPortfolio || "",
        projects: data.projects || [],
        video_url: data.videoUrl || "",
        about_text: data.aboutText || "",
        working_status: data.workingStatus || "",
        weekly_availability: data.weeklyAvailability || "",
        pricing_model: data.pricingModel || [],
        day_rate: data.dayRate || "",
        pricing_notes: data.pricingNotes || "",
      })
      .select()
      .single();

    if (sbError) {
      console.error("Supabase insert notice (falling back to local):", sbError.message);
    } else {
      console.log("Successfully inserted into Supabase friends_applications:", dbRecord.id);
    }

    // 2. Also save to local backup file
    try {
      const fs = await import("fs/promises");
      const path = await import("path");
      const dataDir = path.join(process.cwd(), "data");
      const filePath = path.join(dataDir, "friends-applications.json");

      await fs.mkdir(dataDir, { recursive: true });

      let applications = [];
      try {
        const existing = await fs.readFile(filePath, "utf-8");
        applications = JSON.parse(existing);
      } catch {
        applications = [];
      }

      applications.unshift({
        applicantId,
        supabaseId: dbRecord?.id || null,
        submittedAt: new Date().toISOString(),
        ...data,
      });

      await fs.writeFile(filePath, JSON.stringify(applications, null, 2), "utf-8");
    } catch (fsErr) {
      console.warn("Local backup write failed:", fsErr);
    }

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully to Friends of Unfounded!",
      applicantId,
      supabaseId: dbRecord?.id,
    });
  } catch (error) {
    console.error("Error processing friends application:", error);
    return NextResponse.json(
      { error: "Failed to process application" },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");

    if (!email) {
      return NextResponse.json(
        { error: "Email query param is required" },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("friends_applications")
      .select("applicant_id, full_name, email, selected_categories, selected_roles, working_status, weekly_availability, created_at")
      .eq("email", email.trim().toLowerCase())
      .order("created_at", { ascending: false });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      found: (data || []).length > 0,
      applications: data || [],
    });
  } catch (err) {
    console.error("Lookup error:", err);
    return NextResponse.json({ error: "Lookup failed" }, { status: 500 });
  }
}
