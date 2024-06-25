import React from 'react';

function ProfileComponent({ userProfile }) {
  return (
    <div className="profile-component">
      <h2>User Profile</h2>
      <img src={userProfile.profilePicture} alt="Profile" />
      <p>Name: {userProfile.name}</p>
      <p>Age: {userProfile.age}</p>
      <p>Email: {userProfile.email}</p>
    </div>
  );
}

export default ProfileComponent;
