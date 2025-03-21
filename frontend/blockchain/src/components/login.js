import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = (event) => {
        event.preventDefault();

        // Simulate login logic (replace with your actual authentication)
        if (username && password) { // Simple check for now
            // Replace with your actual user data fetching from backend
            const userData = {
                name: username, // Or fetch from your backend
                // Add other relevant user data
            };
            const userType = "Student"; // Or determine from your backend based on login

            // Navigate to dashboard with user data
            navigate('/dashboard', { state: { userType, userData } });
        } else {
            console.error("Login failed");
        }
    };

    return (
        <div className="login-container">
            <div className="login-form-container">
                <h2 className="login-heading">Login</h2>
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="login-input-group">
                        <label className="login-label">Username:</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="login-input"
                        />
                    </div>
                    <div className="login-input-group">
                        <label className="login-label">Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="login-input"
                        />
                    </div>
                    <button type="submit" className="login-button">
                        Login
                    </button>
                </form>
                <p className="signup-link">
                    Don't have an account? <Link to="/Signup">Sign up </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
