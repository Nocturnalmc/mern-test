import { useState, useEffect } from 'react';

const getStorageTheme = () => {
  let theme = 'light';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
};

function LightDark() {
  const [theme, setTheme] = useState(getStorageTheme());

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <>
      <button
        className='bg-blue-200 dark:bg-blue-900 hover:bg-blue-400'
        onClick={toggleTheme}
      >
        toggle light/dark mode
      </button>
      <div className='bg-blue-200 dark:bg-blue-900 rounded-xl shadow-xl m-auto text-center mr-10 ml-10 pt-10 pb-10'>
        this div is colored with light and dark theme
      </div>
    </>
  );
}

export default LightDark;
