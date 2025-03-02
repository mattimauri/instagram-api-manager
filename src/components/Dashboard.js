import React, { useState } from 'react';
import AddStory from './AddStory';
import AddPost from './AddPost';
import AddSomethingElse from './AddSomethingElse';
import { 
  DashboardContainer, 
  DashboardHeader, 
  UserInfo, 
  Username, 
  DropdownContainer, 
  LogoutButton, 
  DashboardContent, 
  DashboardWelcome,
  Select
} from '../styles';

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
          <DashboardWelcome>
            <h3>Benvenuto, {username}!</h3>
            <p>Seleziona un'opzione dal menu per iniziare a pubblicare su Instagram.</p>
          </DashboardWelcome>
        );
    }
  };

  return (
    <DashboardContainer>
      <DashboardHeader>
        <UserInfo>
          <Username>@{username}</Username>
        </UserInfo>
        <DropdownContainer>
          <Select 
            value={selectedOption} 
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="">-- Seleziona un'azione --</option>
            <option value="story">Add Story</option>
            <option value="post">Add Post</option>
            <option value="other">Add Something Else</option>
          </Select>
        </DropdownContainer>
        <LogoutButton onClick={onLogout}>Logout</LogoutButton>
      </DashboardHeader>
      
      <DashboardContent>
        {renderSelectedComponent()}
      </DashboardContent>
    </DashboardContainer>
  );
};

export default Dashboard;