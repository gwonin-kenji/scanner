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
      <div className="space-y-10">
        <WhoisScanner />
        <NmapScanner />
        <DnsreconScanner />
        <WhatwebScanner />
      </div>
    </Layout>
  );
}

export default App;
