import React, { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';

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
    <div className="App">
      <header className="App-header">
        <h1>Instagram API Manager</h1>
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
      </header>
    </div>
  );
}

export default App;