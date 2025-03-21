import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Signup = () => {
    const [actorType, setActorType] = useState('Student');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        university: '',
        github: '',
        discipline: '',
        companyName: '',
        industry: '',
        location: '',
        companyUrl: '',
        linkedin: '',
    });
    const navigate = useNavigate(); // Initialize useNavigate

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate signup logic (replace with your actual backend integration)
        console.log('Form Data:', formData);

        // Prepare user data for navigation
        let userData = {};
        if (actorType === 'Student') {
            userData = {
                name: formData.name,
                university: formData.university,
                // Add other relevant student data
            };
        } else if (actorType === 'Startup') {
            userData = {
                companyName: formData.companyName,
                industry: formData.industry,
                // Add other relevant startup data
            };
        } else if (actorType === 'Guest'){
            userData = {
                name: formData.name,
                linkedin: formData.linkedin,
            }
        }

        // Navigate to dashboard with user data
        navigate('/dashboard', { state: { userType: actorType, userData: userData } });
    };

    const handleActorChange = (e) => {
        setActorType(e.target.value);
        // Reset form data when actor type changes
        setFormData({
            name: '',
            email: '',
            password: '',
            university: '',
            github: '',
            discipline: '',
            companyName: '',
            industry: '',
            location: '',
            companyUrl: '',
            linkedin: '',
        });
    };

    return (
        <div className="signup-container">
            <div className="signup-form-container">
                <h2 className="signup-heading">Signup</h2>
                <form onSubmit={handleSubmit} className="signup-form">
                    {/* ... (rest of your form code) */}
                    <div className="signup-input-group">
                        <label className="signup-label">Actor Type:</label>
                        <select value={actorType} onChange={handleActorChange} className="signup-select">
                            <option value="Student">Student</option>
                            <option value="Startup">Startup</option>
                            <option value="Guest">Guest</option>
                        </select>
                    </div>

                    <div className="signup-input-group">
                        <label className="signup-label">Name:</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} className="signup-input" required />
                    </div>

                    <div className="signup-input-group">
                        <label className="signup-label">Email:</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} className="signup-input" required />
                    </div>

                    <div className="signup-input-group">
                        <label className="signup-label">Password:</label>
                        <input type="password" name="password" value={formData.password} onChange={handleChange} className="signup-input" required />
                    </div>

                    {actorType === 'Student' && (
                        <>
                            <div className="signup-input-group">
                                <label className="signup-label">University/Affiliation:</label>
                                <input type="text" name="university" value={formData.university} onChange={handleChange} className="signup-input" />
                            </div>
                            <div className="signup-input-group">
                                <label className="signup-label">Github Handle:</label>
                                <input type="text" name="github" value={formData.github} onChange={handleChange} className="signup-input" />
                            </div>
                            <div className="signup-input-group">
                                <label className="signup-label">Discipline:</label>
                                <input type="text" name="discipline" value={formData.discipline} onChange={handleChange} className="signup-input" />
                            </div>
                        </>
                    )}

                    {actorType === 'Startup' && (
                        <>
                            <div className="signup-input-group">
                                <label className="signup-label">Company Name:</label>
                                <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} className="signup-input" />
                            </div>
                            <div className="signup-input-group">
                                <label className="signup-label">Industry:</label>
                                <input type="text" name="industry" value={formData.industry} onChange={handleChange} className="signup-input" />
                            </div>
                            <div className="signup-input-group">
                                <label className="signup-label">Location:</label>
                                <input type="text" name="location" value={formData.location} onChange={handleChange} className="signup-input" />
                            </div>
                            <div className="signup-input-group">
                                <label className="signup-label">Company URL:</label>
                                <input type="url" name="companyUrl" value={formData.companyUrl} onChange={handleChange} className="signup-input" />
                            </div>
                        </>
                    )}

                    {(actorType === 'Startup' || actorType === 'Guest') && (
                        <div className="signup-input-group">
                            <label className="signup-label">LinkedIn Handle:</label>
                            <input type="url" name="linkedin" value={formData.linkedin} onChange={handleChange} className="signup-input" />
                        </div>
                    )}

                    <button type="submit" className="signup-button">Signup</button>
                    <a href="/forget-password" className="signup-forget-password">Forget Password?</a>
                </form>
            </div>
        </div>
    );
};

export default Signup;