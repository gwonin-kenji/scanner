// src/components/Layout.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow max-w-5xl mx-auto px-4 py-6">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
