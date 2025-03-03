import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import { AppContainer, AppHeader, AppTitle } from './styles';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({
    username: '',
    accessToken: '',
    userId: ''
  });

  const handleLogin = (username, token, id) => {
    setUserData({
      username: username,
      accessToken: token,
      userId: id
    });
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setUserData({
      username: '',
      accessToken: '',
      userId: ''
    });
    setIsLoggedIn(false);
  };

  return (
    <AppContainer>
      <AppHeader>
        <AppTitle>Instagram API Manager</AppTitle>
        {!isLoggedIn ? (
          <LoginForm onLogin={handleLogin} />
        ) : (
          <Dashboard 
            username={userData.username}
            accessToken={userData.accessToken}
            userId={userData.userId}
            onLogout={handleLogout}
          />
        )}
      </AppHeader>
    </AppContainer>
  );
}

export default App;