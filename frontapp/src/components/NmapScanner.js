// src/components/NmapScanner.js
import React, { useState } from 'react';
import axios from 'axios';

const API_BASE_URL = "https://api.scanwebapi.online"; 

const NmapScanner = () => {
  const [target, setTarget] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleScan = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_BASE_URL}/nmap?target=${target}`);
      setResult(res.data.result);
    } catch (error) {
      setResult(`Error: ${error.response?.data?.detail || error.message}`);
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>Nmap Scanner</h2>
      <input
        type="text"
        value={target}
        onChange={(e) => setTarget(e.target.value)}
        placeholder="example.com"
      />
      <button onClick={handleScan} disabled={loading}>
        {loading ? 'Scanning...' : 'Scan'}
      </button>
      <pre>{result}</pre>
    </div>
  );
};

export default NmapScanner;
