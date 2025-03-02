import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // In un'app reale, qui faresti una chiamata API al backend
      // per autenticare l'utente con Instagram
      
      // Simulazione di una chiamata API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Per questa demo, simuliamo un token e un ID utente
      // In una vera implementazione, questi verrebbero dalla risposta API
      const mockToken = 'mock_instagram_token_' + Math.random().toString(36).substring(7);
      const mockUserId = '12345678';
      
      onLogin(username, mockToken, mockUserId);
    } catch (err) {
      setError('Errore di autenticazione. Riprova.');
      console.error('Login error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h2>Accedi al tuo account Instagram</h2>
      {error && <div className="error-message">{error}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Il tuo username Instagram"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="La tua password"
          />
        </div>
        
        <div className="form-actions">
          <button 
            type="submit" 
            className="login-btn" 
            disabled={isLoading}
          >
            {isLoading ? 'Attendere...' : 'Accedi'}
          </button>
        </div>
      </form>
      
      <div className="login-info">
        <p>
          <strong>Nota:</strong> Questa applicazione richiede l'accesso per pubblicare contenuti sul tuo account Instagram. 
          Le tue credenziali vengono utilizzate solo per l'autenticazione con Instagram.
        </p>
      </div>
    </div>
  );
};

export default LoginForm;