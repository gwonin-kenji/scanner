// src/components/NmapScanner.js
import React, { useState } from 'react';
import axios from 'axios';

const API_BASE_URL = "https://api.scanwebapi.online";

function NmapScanner() {
  const [target, setDomain] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleScan = async () => {
    if (!target.trim()) {
      setError('ドメインを入力してください。');
      return;
    }

    setLoading(true);
    setError('');
    setResult('');

    try {
      const response = await axios.get(`${API_BASE_URL}/nmap?target=${target}`);
      setResult(response.data.result);
    } catch (err) {
      setError('スキャン中にエラーが発生しました。');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto my-6 p-6 border rounded-2xl shadow-lg bg-white">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Nmap スキャナ</h2>

      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <input
          type="text"
          value={target}
          onChange={(e) => setDomain(e.target.value)}
          placeholder="例: google.com"
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleScan}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          スキャン
        </button>
      </div>

      {loading && <p className="text-blue-500">スキャン中...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {result && (
        <div className="whitespace-pre-wrap bg-gray-100 p-4 mt-4 rounded-md border overflow-auto max-h-96">
          {result}
        </div>
      )}
    </div>
  );
}

export default NmapScanner;
