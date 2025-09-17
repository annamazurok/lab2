import React from "react";
import "./profile.css";

const Profile = ({ name, role, avatarUrl }) => {
  return (
    <div className="profile">
      <img className="profile-avatar" src={avatarUrl} alt={name} />
      <div className="profile-info">
        <h3>{name}</h3>
        <p>{role}</p>
      </div>
    </div>
  );
};

export default Profile;