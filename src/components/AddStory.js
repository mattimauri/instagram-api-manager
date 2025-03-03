import React, { useState } from 'react';
import { 
  ActionContainer, 
  ActionTitle, 
  FormGroup, 
  Label, 
  Input, 
  Button, 
  StatusMessage,
  Hint,
  ErrorMessage
} from '../styles';

const AddStory = ({ accessToken, userId }) => {
  const [imageUrl, setImageUrl] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');
    setError('');
    setIsLoading(true);

    try {
      // Prima verifica se l'URL dell'immagine è valido
      const checkImage = new Image();
      checkImage.src = imageUrl;
      await new Promise((resolve, reject) => {
        checkImage.onload = resolve;
        checkImage.onerror = () => reject(new Error('URL immagine non valido o non accessibile'));
      });
      
      setStatus('Pubblicazione story in corso...');
      
      // Step 1: Crea il contenuto multimediale come una Instagram Story
      const createStoryResponse = await fetch(`https://graph.facebook.com/v18.0/${userId}/stories`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          image_url: imageUrl,
          access_token: accessToken,
        }),
      });

      const storyData = await createStoryResponse.json();

      if (storyData.error) {
        throw new Error(storyData.error.message || 'Errore durante la pubblicazione della story');
      }
      
      // La risposta dovrebbe contenere l'ID della story pubblicata
      setStatus(`Story pubblicata con successo! ID: ${storyData.id}`);
      setImageUrl('');
    } catch (error) {
      console.error('Error posting story:', error);
      setError(`Errore: ${error.message}`);
      setStatus('');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ActionContainer>
      <ActionTitle>Pubblica una nuova Story</ActionTitle>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="story-image">URL Immagine:</Label>
          <Input
            id="story-image"
            type="url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="https://esempio.com/immagine.jpg"
            required
            disabled={isLoading}
          />
          <Hint>L'URL deve essere pubblicamente accessibile e puntare a un'immagine JPEG o PNG</Hint>
        </FormGroup>
        
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Pubblicazione in corso...' : 'Pubblica Story'}
        </Button>
      </form>
      
      {status && <StatusMessage>{status}</StatusMessage>}
      
      <Hint style={{ marginTop: '20px' }}>
        <strong>Nota:</strong> Per utilizzare questa funzionalità, il tuo account Instagram deve essere di tipo Business o Creator 
        e l'app deve avere le autorizzazioni necessarie approvate da Facebook.
      </Hint>
    </ActionContainer>
  );
};

export default AddStory;