import React, { useState, useEffect } from 'react';
import { 
  LoginContainer, 
  LoginTitle, 
  FormGroup, 
  Button, 
  ErrorMessage,
  LoginInfo,
  Hint
} from '../styles';

const LoginForm = ({ onLogin }) => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // Configura i parametri per l'autenticazione OAuth
  // Sostituisci questa stringa con il tuo vero ID app numerico di Instagram
  const clientId = '522160340900311'; // Esempio: sostituisci con il tuo ID app numerico
  const redirectUri = window.location.origin; // L'URL della tua app
  const scope = 'user_profile,instagram_content_publish'; // Permessi richiesti
  
  // Controlla se siamo tornati da un redirect OAuth
  useEffect(() => {
    // Cerca sia nei parametri URL che nel fragment (hash)
    const urlParams = new URLSearchParams(window.location.search);
    const hashParams = new URLSearchParams(window.location.hash.substring(1));
    
    // Instagram può restituire il token come parametro o nel fragment
    const accessToken = urlParams.get('access_token') || hashParams.get('access_token');
    
    if (accessToken) {
      // Rimuovi i parametri dall'URL per sicurezza
      window.history.replaceState({}, document.title, window.location.pathname);
      
      // Abbiamo ricevuto un token, ora otteniamo le informazioni dell'utente
      fetchUserInfo(accessToken);
    }
  }, []);
  
  const fetchUserInfo = async (token) => {
    setIsLoading(true);
    try {
      // Chiamata per ottenere le informazioni dell'utente
      const response = await fetch(`https://graph.instagram.com/me?fields=id,username&access_token=${token}`);
      const userData = await response.json();
      
      if (userData.error) {
        throw new Error(userData.error.message || 'Errore nel recupero delle informazioni utente');
      }
      
      // Chiamiamo onLogin con username, token e ID utente
      onLogin(userData.username, token, userData.id);
    } catch (err) {
      setError(`Errore durante l'autenticazione: ${err.message}`);
      console.error('Login error:', err);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleInstagramLogin = () => {
    setIsLoading(true);
    
    // L'URL di autorizzazione per Instagram
    const authUrl = `https://api.instagram.com/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scope}&response_type=token`;
    
    // Reindirizza l'utente alla pagina di login di Instagram
    window.location.href = authUrl;
  };
  
  return (
    <LoginContainer>
      <LoginTitle>Accedi con il tuo account Instagram</LoginTitle>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      
      <FormGroup>
        <Button 
          type="button" 
          onClick={handleInstagramLogin}
          disabled={isLoading}
        >
          {isLoading ? 'Attendere...' : 'Accedi con Instagram'}
        </Button>
      </FormGroup>
      
      <LoginInfo>
        <p>
          <strong>Nota:</strong> Verrai reindirizzato al sito ufficiale di Instagram per effettuare l'accesso in modo sicuro.
          Questa app avrà accesso solo ai permessi che autorizzerai.
        </p>
      </LoginInfo>
      
      <Hint style={{ marginTop: '20px' }}>
        L'app utilizza l'autenticazione sicura di Instagram. Nessuna password viene memorizzata o gestita da questa applicazione.
      </Hint>
    </LoginContainer>
  );
};

export default LoginForm;