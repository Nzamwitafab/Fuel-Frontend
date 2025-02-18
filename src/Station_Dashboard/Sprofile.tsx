import React, { useState } from 'react';
import { Bell, Camera } from 'lucide-react';

const ProfileSetting = () => {
    const [name, setName] = useState('Fabrice');
    const [email, setEmail] = useState('Fabrice@gmail.com');
    const [newPassword, setNewPassword] = useState('');
    const [notification, setNotification] = useState(true);
    const [editingPicture, setEditingPicture] = useState(false);

    const handlePictureClick = () => {
        setEditingPicture(true);
    };

    const handleSavePicture = () => {
        setEditingPicture(false);
    };

    return (
        <div
            className="d-flex justify-content-center align-items-center"
            style={{
                backgroundColor: "#EDEDED",
                border: "1px solid skyblue",
                borderRadius: "20px",
                height: "95vh",
                margin: "0 auto",
                width: "90%"
            }}
        >
            <div className="p-5" style={{ width: '80%', marginLeft: '15%' }}>
                <h2>Profile Settings</h2>
                <div className="text-center">
                    <div className="rounded-circle overflow-hidden" style={{ width: 100, height: 100, cursor: 'pointer' }} onClick={handlePictureClick}>
                        <img src="/Images/profile.jpeg" alt="Profile" style={{ width: '100%', height: '100%' }} />
                    </div>
                    <a href="#" className="d-block text-primary mt-2">Update Profile Picture</a>
                </div>

                {editingPicture && (
                    <div className="mt-3">
                        <input type="file" className="form-control" />
                        <button className="btn btn-success mt-2" onClick={handleSavePicture}>Save</button>
                    </div>
                )}

                <div className="mt-4">
                    <label>Name:</label>
                    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mt-3">
                    <label>Email:</label>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mt-3">
                    <label>New Password:</label>
                    <input type="password" className="form-control" placeholder="Change Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                </div>

                <h4 className="mt-4">System Setting:</h4>
                <div className="d-flex align-items-center">
                    <Bell className="me-2" />
                    <span>Email Notification</span>
                    <div className="form-check form-switch ms-auto">
                        <input className="form-check-input" type="checkbox" checked={notification} onChange={() => setNotification(!notification)} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileSetting;
