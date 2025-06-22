const express = require('express');
const bcrypt = require('bcrypt');
const supabase = require('../supabaseClient');
const router = express.Router();

// Register route
router.post('/register', async (req, res) => {
    const {
        surname, firstname, middlename, 
        email, password, dob, gender, 
        nationality, phone, nin, address
    } = req.body;

    // 1. Check if user already exists
    const { data: existingUser, error: userError } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single();
        
    if (existingUser) {
      return res.status(409).json({ error: 'Email already registered.' });
    }

    //2. Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    //3. Insert user into Supabase
    const { error } = await supabase.from('users').insert([{
       surname, firstname, middlename,
       email, password: hashedPassword, dob, gender,
       nationality, phone, nin, address
   }]);

   if (error) {
     return res.status(500).json({ error: 'Registration failed.' });
    }

   res.status(201).json({ message: 'User registered successfully.' });
});

module.exports = router;