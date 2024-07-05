import React, { useState, useEffect } from 'react';
import '../navbar/navbar.css';

export const Navbar = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false); // Theme state

useEffect(() => {
  // Check local storage for preferred theme on initial render
  const storedTheme = localStorage.getItem('theme');
  setIsDarkTheme(storedTheme === 'dark');

  // Update aria-pressed attribute and body class based on initial theme
  document.documentElement.classList.toggle('dark', isDarkTheme);
  const toggle = document.querySelector('.theme-toggle');
  if (toggle) {
    toggle.setAttribute('aria-pressed', isDarkTheme);
  }
}, []);

const toggleTheme = () => {
  setIsDarkTheme(!isDarkTheme);
  document.documentElement.classList.toggle('dark'); // Apply theme class
  localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light'); // Persist theme
};

  return (
<div className=''>
       {/*Navbar*/}
      <nav>
        <div className="nav__content">
          {/*left logo */}
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/easter.svg"
              alt="logo"
              width={38}
              height={38}
              className="cursor-pointer"
            />
          </a>
 {/*right logo */}
          <div className="nav__control">
            <input type="checkbox" id="menu" className="sr-only" />
            <label for="menu">
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokewidth="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              <span className="sr-only">Toggle Menu</span>
            </label>
          </div>
          <div className="nav__options">
            <a
              className="link"
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Home</span>
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
            <a
              class="link"
              href="/about"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>About</span>
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
            <a
              className="link"
              href="/services"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Projects</span>
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
            <a
              className="link ebook"
              href="/contact"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>contact</span>
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
            <a
              className="link"
              href="https://twitch.tv/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Blog</span>
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>
           {/*right logo  end*/}

        </div>
      </nav>
       {/*nav end */}

 {/*Theme switch*/}
      <button  aria-pressed={isDarkTheme} className="theme-toggle" onClick={toggleTheme}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6"
        >
          <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
          <path
            fill-rule="evenodd"
            d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
            clip-rule="evenodd"
          />
        </svg>
        <span class="sr-only">Toggle Theme</span>
      </button>

       {/*twitter */}
      <a
        class="x-link"
        href="https://x.com/home"
        target="_blank"
        rel="noreferrer noopener"
      >
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <title>X</title>
          <path
            d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
            fill="currentColor"
          />
        </svg>
      </a>
    </div>
  );
};
  