import React, { useState } from 'react';
import { BeatLoader } from 'react-spinners';
import { API_BASE_URL, API_PING_ENDPOINT } from "./properties";
import './App.css';

const App = () => {
  const [ipAddress, setIpAddress] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePing = async () => {
    try {
      setLoading(true);
      setError('');
      setResult('');
      const response = await fetch(`${API_BASE_URL}${API_PING_ENDPOINT}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ipAddress }),
      });

      const data = await response.json();

      if (response.ok) {
        setResult(data.result);
      } else {
        setError(data.error);
      }
    } catch (error) {
      console.log(error)
      setError('Error connecting to the server');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="green-black-theme">
      <h1>Check if Host is Alive</h1>
      <label>
        Enter IP Address:
        <input
          type="text"
          value={ipAddress}
          onChange={(e) => setIpAddress(e.target.value)}
        />
      </label>
      <button onClick={handlePing}>Check</button>

      {loading && <BeatLoader className="beat-loader" size={10} color={'#36D7B7'} />}
      
      {result && <p>{result}</p>}
      {error && <p className="error-message">{error}</p>}

      <div className="footer-text">
        Fabio Cinicolo, Network Security project 2023/2024
      </div>
    </div>
  );
};

export default App;