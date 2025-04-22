// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 py-4 mt-12 text-center border-t border-gray-300 dark:border-gray-700">
      <p>&copy; {new Date().getFullYear()} Web Scanner Tool. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
