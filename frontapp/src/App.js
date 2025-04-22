// src/App.js
import React from 'react';
import Layout from './components/Layout';
import WhoisScanner from './components/WhoisScanner';
import NmapScanner from './components/NmapScanner';
import DnsreconScanner from './components/DnsreconScanner';
import WhatwebScanner from './components/WhatwebScanner';

function App() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Web Scanner Tool</h1>

        {/* スキャナーをグリッドで配置 */}
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
