import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://vebgpzeowgiaxsncxujh.supabase.co';
const SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZlYmdwemVvd2dpYXhzbmN4dWpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjkxMTkyNzQsImV4cCI6MTk4NDY5NTI3NH0.MQnIW-35wM5MaZ63u-zC-b_7senMs7LDGojXkBvFhQ8';

export const getSupabase = () => {
  return createClient(SUPABASE_URL, SUPABASE_KEY);
};
