// src/components/Header.js
import React, { useEffect, useState } from 'react';

function Header() {
  const [isDark, setIsDark] = useState(false);

  // 初期状態のチェック
  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };

  return (
    <header className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 shadow-md py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Web Scanner Tool</h1>
      <button
        onClick={toggleTheme}
        className="bg-gray-300 dark:bg-gray-700 text-sm px-3 py-1 rounded hover:bg-gray-400 dark:hover:bg-gray-600"
      >
        {isDark ? 'ライトモード' : 'ダークモード'}
      </button>
    </header>
  );
}

export default Header;
