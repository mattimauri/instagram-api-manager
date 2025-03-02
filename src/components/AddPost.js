import React, { useState } from 'react';

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
    <div className="action-container">
      <h2>Pubblica un nuovo Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="post-image">URL Immagine:</label>
          <input
            id="post-image"
            type="url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="https://esempio.com/immagine.jpg"
            required
          />
          <p className="hint">Deve essere un URL pubblicamente accessibile</p>
        </div>
        
        <div className="form-group">
          <label htmlFor="post-caption">Didascalia:</label>
          <textarea
            id="post-caption"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="Scrivi la didascalia del post..."
            rows="4"
          />
        </div>
        
        <button type="submit" className="action-btn">Pubblica Post</button>
      </form>
      
      {status && <p className="status-message">{status}</p>}
    </div>
  );
};

export default AddPost;