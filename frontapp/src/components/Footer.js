import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-500 py-4 mt-10 text-center text-sm border-t">
      © {new Date().getFullYear()} Web Scanner Tool. All rights reserved.
    </footer>
  );
};

export default Footer;
