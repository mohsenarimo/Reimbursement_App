import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault(); setError('');
        try { // Replace with your API endpoint 
            const response = await axios.post('http://localhost:8080/api/login', { username, password });
            if (response.data.token) { // Store token and navigate to Home 
                localStorage.setItem('token', response.data.token);
                navigate('/home');
            } else {
                setError('Invalid credentials');
            }
        } catch (err) {
            setError('Login failed');
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
            <h1>Login</h1>
            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} style={{ marginBottom: '10px', padding: '10px', fontSize: '16px' }} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ marginBottom: '10px', padding: '10px', fontSize: '16px' }} />
                <button type="submit" style={{ padding: '10px', fontSize: '16px', cursor: 'pointer' }}> Login </button>
                {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>} </form> </div>);
};

export default LoginPage;