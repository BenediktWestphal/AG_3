import React, { useState, useEffect } from 'react';
import './App.css'; // Assuming you might want some basic styling

function App() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Use VITE_API_BASE_URL from .env or default if not set
    const apiUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001';
    fetch(`${apiUrl}/api/health`) // Adjusted to use full URL
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setMessage(data.message))
      .catch(err => {
        console.error("Fetch error:", err);
        setError('Failed to fetch message from backend. Is the backend running and VITE_API_BASE_URL configured?');
      });
  }, []);

  return (
    <div>
      <h1>Frontend</h1>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {message && <p>Message from backend: {message}</p>}
      {!message && !error && <p>Loading message from backend...</p>}
    </div>
  );
}

export default App;
