import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://roataydfibvrvlnjukhw.supabase.co';
const SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJvYXRheWRmaWJ2cnZsbmp1a2h3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjkxMzY5NDksImV4cCI6MTk4NDcxMjk0OX0.NcwW19bzCQPw49vKM-yIowj4JP4JvsPSA4DMvw0AvbM';

export const getSupabase = () => {
  return createClient(SUPABASE_URL, SUPABASE_KEY);
};
