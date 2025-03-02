import React, { useState } from 'react';
import { 
  ActionContainer, 
  ActionTitle, 
  FormGroup, 
  Label, 
  Input, 
  Select,
  Button, 
  StatusMessage,
  Hint
} from '../styles';

const AddSomethingElse = ({ accessToken, userId }) => {
  const [content, setContent] = useState('');
  const [contentType, setContentType] = useState('reel');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(`Pubblicazione ${contentType} in corso...`);

    try {
      // Simulazione API call
      await new Promise(resolve => setTimeout(resolve, 1800));
      
      // Qui implementeresti la vera chiamata API per pubblicare altri tipi di contenuto
      // usando l'endpoint Instagram Graph API appropriato
      
      setStatus(`${contentType.charAt(0).toUpperCase() + contentType.slice(1)} pubblicato con successo!`);
      setContent('');
    } catch (error) {
      setStatus(`Errore: ${error.message}`);
      console.error(`Error posting ${contentType}:`, error);
    }
  };

  return (
    <ActionContainer>
      <ActionTitle>Pubblica altro contenuto</ActionTitle>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="content-type">Tipo di contenuto:</Label>
          <Select
            id="content-type"
            value={contentType}
            onChange={(e) => setContentType(e.target.value)}
          >
            <option value="reel">Reel</option>
            <option value="carousel">Carousel</option>
            <option value="igtv">IGTV</option>
          </Select>
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="content-url">URL Contenuto:</Label>
          <Input
            id="content-url"
            type="url"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="https://esempio.com/contenuto.mp4"
            required
          />
          <Hint>Deve essere un URL pubblicamente accessibile</Hint>
        </FormGroup>
        
        <Button type="submit">Pubblica {contentType}</Button>
      </form>
      
      {status && <StatusMessage>{status}</StatusMessage>}
    </ActionContainer>
  );
};

export default AddSomethingElse;