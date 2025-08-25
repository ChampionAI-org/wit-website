import { createClient } from "@supabase/supabase-js";

// Environment validation
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create a placeholder client if environment variables are missing
let supabase: any = null;

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
} else {
  // Create a mock client for development when env vars are missing
  supabase = {
    from: () => ({
      insert: () => Promise.resolve({ data: null, error: null })
    })
  };
  console.warn("Supabase environment variables not found. Using mock client.");
}

export { supabase };

// Browser check utility
export const isClient = typeof window !== "undefined";

// Optional: Export a function to check if Supabase is properly configured
export const isSupabaseConfigured = () => {
  return !!(supabaseUrl && supabaseAnonKey);
};
