import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://dsvuczunvyyyofhskjww.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRzdnVjenVudnl5eW9maHNrand3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQwNDk1ODIsImV4cCI6MjA1OTYyNTU4Mn0.Iy4C5jaroEzQ4trrvngcGiUexom_xtKtWPxPZhEpV-c";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
