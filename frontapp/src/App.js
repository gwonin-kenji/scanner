// src/App.js
import React from 'react';
import WhoisScanner from './components/WhoisScanner';
import NmapScanner from './components/NmapScanner';
import DnsreconScanner from './components/DnsreconScanner';
import WhatwebScanner from './components/WhatwebScanner';

function App() {
  return (
    <div className="App">
      <h1>Web Scanner Tool</h1>
      <WhoisScanner />
      <NmapScanner />
      <DnsreconScanner />
      <WhatwebScanner />
    </div>
  );
}

export default App;
