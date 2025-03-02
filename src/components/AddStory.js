import React, { useState } from 'react';

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
    <div className="action-container">
      <h2>Pubblica una nuova Story</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="story-image">URL Immagine:</label>
          <input
            id="story-image"
            type="url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="https://esempio.com/immagine.jpg"
            required
          />
          <p className="hint">Deve essere un URL pubblicamente accessibile</p>
        </div>
        
        <button type="submit" className="action-btn">Pubblica Story</button>
      </form>
      
      {status && <p className="status-message">{status}</p>}
    </div>
  );
};

export default AddStory;