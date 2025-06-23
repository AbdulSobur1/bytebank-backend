const { createClient } = require('@supabase/supabase-js');

// Optional: Debug logs to confirm values are coming through
console.log('Supabase URL:', process.env.SUPABASE_URL);
console.log('Supabase Key Start:', process.env.SUPABASE_SERVICE_ROLE_KEY?.slice(0, 5));

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY // Make sure THIS matches what's in Render
);

module.exports = supabase;

// Ensure that the environment variables are set