import React, { useState } from 'react';
import { 
  LoginContainer, 
  LoginTitle, 
  FormGroup, 
  Label, 
  Input, 
  Button, 
  ErrorMessage,
  LoginInfo
} from '../styles';

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
    <LoginContainer>
      <LoginTitle>Accedi al tuo account Instagram</LoginTitle>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="username">Username:</Label>
          <Input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Il tuo username Instagram"
          />
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="password">Password:</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="La tua password"
          />
        </FormGroup>
        
        <FormGroup>
          <Button 
            type="submit" 
            disabled={isLoading}
          >
            {isLoading ? 'Attendere...' : 'Accedi'}
          </Button>
        </FormGroup>
      </form>
      
      <LoginInfo>
        <p>
          <strong>Nota:</strong> Questa applicazione richiede l'accesso per pubblicare contenuti sul tuo account Instagram. 
          Le tue credenziali vengono utilizzate solo per l'autenticazione con Instagram.
        </p>
      </LoginInfo>
    </LoginContainer>
  );
};

export default LoginForm;