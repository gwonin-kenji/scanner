import React, { useEffect, useState } from 'react';
import Layout from './components/Layout';
import WhoisScanner from './components/WhoisScanner';
import NmapScanner from './components/NmapScanner';
import DnsreconScanner from './components/DnsreconScanner';
import WhatwebScanner from './components/WhatwebScanner';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-center flex-1">Web Scanner Tool</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded px-4 py-2 ml-4"
          >
            {darkMode ? 'ライトモード' : 'ダークモード'}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <WhoisScanner />
          <NmapScanner />
          <DnsreconScanner />
          <WhatwebScanner />
        </div>
      </div>
    </Layout>
  );
}

export default App;
