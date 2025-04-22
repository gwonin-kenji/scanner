import React, { useState } from 'react';
import axios from 'axios';

const API_BASE_URL = "https://api.scanwebapi.online";

function WhoisScanner() {
  const [domain, setDomain] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleScan = async () => {
    if (!domain.trim()) return;
    setLoading(true);
    try {
      const response = await axios.get(`${API_BASE_URL}/whois?domain=${domain}`);
      setResult(response.data.result);
    } catch (error) {
      setResult('エラーが発生しました。');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Whois Scanner</h2>
      <input
        type="text"
        placeholder="example.com"
        value={domain}
        onChange={(e) => setDomain(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-black dark:text-white"
      />
      <button
        onClick={handleScan}
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {loading ? 'スキャン中...' : 'スキャン'}
      </button>

      {result && (
        <pre className="mt-4 whitespace-pre-wrap bg-gray-100 dark:bg-gray-900 p-4 rounded text-sm overflow-auto">
          {result}
        </pre>
      )}
    </div>
  );
}

export default WhoisScanner;
