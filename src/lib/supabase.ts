import { createClient } from "@supabase/supabase-js";

// Environment validation
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "placeholder-key";

// Warn if not configured but don't throw in development
if (!import.meta.env.VITE_SUPABASE_URL && process.env.NODE_ENV === 'development') {
  console.warn("VITE_SUPABASE_URL not configured. Using placeholder for development.");
}

if (!import.meta.env.VITE_SUPABASE_ANON_KEY && process.env.NODE_ENV === 'development') {
  console.warn("VITE_SUPABASE_ANON_KEY not configured. Using placeholder for development.");
}

// Create and export the Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Browser check utility
export const isClient = typeof window !== "undefined";

// Optional: Export a function to check if Supabase is properly configured
export const isSupabaseConfigured = () => {
  return !!(import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY);
};
