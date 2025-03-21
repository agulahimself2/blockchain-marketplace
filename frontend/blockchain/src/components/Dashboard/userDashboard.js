import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Web3 from 'web3'; // Import Web3

const UserDashboard = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { userType, userData } = location.state || { userType: null, userData: null };
    const [walletAddress, setWalletAddress] = useState(null);
    const [web3, setWeb3] = useState(null);
    const [balance, setBalance] = useState(null);

    useEffect(() => {
        if (window.ethereum) {
            setWeb3(new Web3(window.ethereum));
        } else {
            console.error('MetaMask not detected');
        }
    }, []);

    const connectWallet = async () => {
        if (web3) {
            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                setWalletAddress(accounts[0]);
                const bal = await web3.eth.getBalance(accounts[0]);
                setBalance(web3.utils.fromWei(bal, 'ether'));
            } catch (error) {
                console.error('Wallet connection error:', error);
            }
        }
    };

    const handleLogout = () => {
        navigate('/');
    };

    if (!userType || !userData) {
        navigate('/');
        return null;
    }

    if (userType === 'Student') {
        return (
            <div className="dashboard-container">
                <h2>Student Dashboard</h2>
                <p>Welcome, {userData.name}!</p>
                <div className="dashboard-section">
                    <h3>Applied Jobs</h3>
                    {/* Display applied jobs */}
                </div>
                <div className="dashboard-section">
                    <h3>Payment Tracking</h3>
                    {walletAddress ? (
                        <div>
                            <p>Connected Wallet: {walletAddress}</p>
                            <p>Balance: {balance} ETH</p>
                        </div>
                    ) : (
                        <button onClick={connectWallet}>Connect Web3 Wallet</button>
                    )}
                    {/* Display payment tracking */}
                </div>
                <div className="dashboard-section">
                    <h3>Update Profile & Achievements</h3>
                    {/* Form for updating profile */}
                </div>
                <div className="dashboard-section">
                    <h3>Hackathons & Joint Projects</h3>
                    {/* Display hackathons and projects */}
                </div>
                <button onClick={handleLogout}>Logout</button>
            </div>
        );
    } else if (userType === 'Startup') {
        return (
            <div className="dashboard-container">
                <h2>Startup Dashboard</h2>
                <p>Welcome, {userData.companyName}!</p>
                <div className="dashboard-section">
                    <h3>Post Job Listings</h3>
                    {/* Form for posting jobs */}
                </div>
                <div className="dashboard-section">
                    <h3>View Job Applications</h3>
                    {/* Display job applications */}
                </div>
                <div className="dashboard-section">
                    <h3>Manage Payments</h3>
                    {walletAddress ? (
                        <div>
                            <p>Connected Wallet: {walletAddress}</p>
                            <p>Balance: {balance} ETH</p>
                        </div>
                    ) : (
                        <button onClick={connectWallet}>Connect Web3 Wallet</button>
                    )}
                    {/* Payment management */}
                </div>
                <div className="dashboard-section">
                    <h3>Manage Collaborations</h3>
                    {/* Collaboration management */}
                </div>
                <div className="dashboard-section">
                    <h3>Update Company Profile</h3>
                    {/* Form for updating profile */}
                </div>
                <button onClick={handleLogout}>Logout</button>
            </div>
        );
    } else {
        return <div>Invalid user type.</div>;
    }
};

export default UserDashboard;