import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://qqredbhwqvzdfqgymtcd.supabase.co";
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxcmVkYmh3cXZ6ZGZxZ3ltdGNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkzNjgxOTcsImV4cCI6MjEwNDk0NDE5N30.1Ci-ffAWe_mImTphdqsz4ASh1e_H1QILFXBPQW4Hozc";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
