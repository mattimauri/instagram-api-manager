import React, { useState } from 'react';
import { 
  ActionContainer, 
  ActionTitle, 
  FormGroup, 
  Label, 
  Input, 
  TextArea,
  Button, 
  StatusMessage,
  Hint
} from '../styles';

const AddPost = ({ accessToken, userId }) => {
  const [imageUrl, setImageUrl] = useState('');
  const [caption, setCaption] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Pubblicazione post in corso...');

    try {
      // Simulazione API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Qui implementeresti la vera chiamata API per pubblicare un post
      // usando l'endpoint Instagram Graph API appropriato
      
      setStatus('Post pubblicato con successo!');
      setImageUrl('');
      setCaption('');
    } catch (error) {
      setStatus(`Errore: ${error.message}`);
      console.error('Error posting to Instagram:', error);
    }
  };

  return (
    <ActionContainer>
      <ActionTitle>Pubblica un nuovo Post</ActionTitle>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="post-image">URL Immagine:</Label>
          <Input
            id="post-image"
            type="url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="https://esempio.com/immagine.jpg"
            required
          />
          <Hint>Deve essere un URL pubblicamente accessibile</Hint>
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="post-caption">Didascalia:</Label>
          <TextArea
            id="post-caption"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="Scrivi la didascalia del post..."
            rows="4"
          />
        </FormGroup>
        
        <Button type="submit">Pubblica Post</Button>
      </form>
      
      {status && <StatusMessage>{status}</StatusMessage>}
    </ActionContainer>
  );
};

export default AddPost;