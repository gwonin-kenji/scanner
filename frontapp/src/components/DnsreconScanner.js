// src/components/DnsreconScanner.js
import React, { useState } from 'react';
import axios from 'axios';

const API_BASE_URL = "https://api.scanwebapi.online"; 

function DnsreconScanner() {
  const [domain, setDomain] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleScan = async () => {
    if (!domain) return;
    setLoading(true);
    try {
      const response = await axios.get(
        `${API_BASE_URL}/dnsrecon?domain=${domain}`
      );
      setResult(response.data.result || JSON.stringify(response.data));
    } catch (error) {
      setResult('エラーが発生しました');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mt-6">
      <h2 className="text-xl font-semibold mb-4">DNSRecon Scanner</h2>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
        <input
          type="text"
          placeholder="例: google.com"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleScan}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          スキャン
        </button>
      </div>

      {loading ? (
        <p className="mt-4 text-sm text-gray-500">スキャン中...</p>
      ) : result ? (
        <pre className="mt-4 bg-gray-100 p-4 rounded text-sm overflow-auto max-h-96 whitespace-pre-wrap">
          {result}
        </pre>
      ) : null}
    </div>
  );
}

export default DnsreconScanner;
