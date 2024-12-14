import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import supabase from '../supabase-client';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const { data: { session }, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      const token = session.access_token; // This is the JWT
      const uid = session.user.id; // Retrieve the authenticated user's UID
      console.log('User UID:', uid);
      console.log('token:', token);

      localStorage.setItem('supabase_token', token);
      localStorage.setItem('uid', uid);

      setSuccess('Login successful!');
      
      navigate('/messages');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h2>René Login</h2>
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ display: 'block', width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ display: 'block', width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </label>
        </div>
        <button type="submit" disabled={loading} style={{ padding: '10px 20px' }}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <h6 className='font-parkinsons mt-5 text-center mx-auto'>If you got here by accident, <a href='/' className='text-dark'>click here to head home!</a></h6>
    </div>
  );
};

export default Login;
