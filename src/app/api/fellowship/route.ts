import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import fs from "fs/promises";
import path from "path";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      fullName,
      email,
      phone,
      college,
      yearOfStudy,
      builderType,
      builtLinks,
      lakhPitch,
    } = body;

    if (!fullName || !email) {
      return NextResponse.json(
        { error: "Full name and email are required." },
        { status: 400 }
      );
    }

    // 1. Insert into Supabase database
    const { data: dbRecord, error: sbError } = await supabase
      .from("fellowship_applications")
      .insert({
        full_name: fullName.trim(),
        email: email.trim().toLowerCase(),
        phone: phone || "",
        college: college || "",
        year_of_study: yearOfStudy || "",
        builder_type: builderType || "Hybrid Builder",
        built_links: builtLinks || "",
        lakh_pitch: lakhPitch || "",
      })
      .select()
      .single();

    if (sbError) {
      console.warn("Supabase insert notice (falling back to local file):", sbError.message);
    } else {
      console.log("Inserted fellowship applicant into Supabase:", dbRecord?.id);
    }

    // 2. Backup to local JSON file
    try {
      const dataDir = path.join(process.cwd(), "data");
      await fs.mkdir(dataDir, { recursive: true });
      const filePath = path.join(dataDir, "fellowship-applications.json");

      let existing: unknown[] = [];
      try {
        const fileData = await fs.readFile(filePath, "utf-8");
        existing = JSON.parse(fileData);
      } catch {
        existing = [];
      }

      existing.push({
        id: dbRecord?.id || `FEL-${Date.now()}`,
        fullName,
        email,
        phone,
        college,
        yearOfStudy,
        builderType,
        builtLinks,
        lakhPitch,
        submittedAt: new Date().toISOString(),
      });

      await fs.writeFile(filePath, JSON.stringify(existing, null, 2), "utf-8");
    } catch (fsErr) {
      console.error("Local backup write error:", fsErr);
    }

    return NextResponse.json({
      success: true,
      id: dbRecord?.id,
      message: "Application submitted successfully to Unfounded Fellowship.",
    });
  } catch (error) {
    console.error("Fellowship submission error:", error);
    return NextResponse.json(
      { error: "Internal server error submitting application." },
      { status: 500 }
    );
  }
}
