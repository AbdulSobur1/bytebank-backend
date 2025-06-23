// supabaseClient.js
const { createclient, createClient } = require('@supabase/supabase-js');

// DEBUG: check if new env vars are actually coming through
console.log('Supabase URL:', process.env.SUPABASE_URL);
console.log('Supabase Key:', process.env.SUPABASE_SERVICE_KEY?.slice(0, 5)); // just part of it

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

module.exports = supabase;

// Ensure that the environment variables are set