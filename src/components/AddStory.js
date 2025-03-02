import React, { useState } from 'react';
import { 
  ActionContainer, 
  ActionTitle, 
  FormGroup, 
  Label, 
  Input, 
  Button, 
  StatusMessage,
  Hint
} from '../styles';

const AddStory = ({ accessToken, userId }) => {
  const [imageUrl, setImageUrl] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Pubblicazione story in corso...');

    try {
      // Simulazione API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Qui implementeresti la vera chiamata API per pubblicare una story
      // usando l'endpoint Instagram Graph API appropriato
      
      setStatus('Story pubblicata con successo!');
      setImageUrl('');
    } catch (error) {
      setStatus(`Errore: ${error.message}`);
      console.error('Error posting story:', error);
    }
  };

  return (
    <ActionContainer>
      <ActionTitle>Pubblica una nuova Story</ActionTitle>
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
          />
          <Hint>Deve essere un URL pubblicamente accessibile</Hint>
        </FormGroup>
        
        <Button type="submit">Pubblica Story</Button>
      </form>
      
      {status && <StatusMessage>{status}</StatusMessage>}
    </ActionContainer>
  );
};

export default AddStory;