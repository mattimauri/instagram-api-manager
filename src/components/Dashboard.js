import React, { useState } from 'react';
import AddStory from './AddStory';
import AddPost from './AddPost';
import AddSomethingElse from './AddSomethingElse';

const Dashboard = ({ username, accessToken, userId, onLogout }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const renderSelectedComponent = () => {
    switch (selectedOption) {
      case 'story':
        return <AddStory accessToken={accessToken} userId={userId} />;
      case 'post':
        return <AddPost accessToken={accessToken} userId={userId} />;
      case 'other':
        return <AddSomethingElse accessToken={accessToken} userId={userId} />;
      default:
        return (
          <div className="dashboard-welcome">
            <h3>Benvenuto, {username}!</h3>
            <p>Seleziona un'opzione dal menu per iniziare a pubblicare su Instagram.</p>
          </div>
        );
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div className="user-info">
          <span className="username">@{username}</span>
        </div>
        <div className="dropdown-container">
          <select 
            value={selectedOption} 
            onChange={(e) => setSelectedOption(e.target.value)}
            className="dropdown-menu"
          >
            <option value="">-- Seleziona un'azione --</option>
            <option value="story">Add Story</option>
            <option value="post">Add Post</option>
            <option value="other">Add Something Else</option>
          </select>
        </div>
        <button onClick={onLogout} className="logout-btn">Logout</button>
      </div>
      
      <div className="dashboard-content">
        {renderSelectedComponent()}
      </div>
    </div>
  );
};

export default Dashboard;