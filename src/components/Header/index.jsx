import { useState } from 'react';
import Logo from '../../assets/LogoPrincipal.png';
import styles from './Header.module.scss';

function Header() {
  // State to control the dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Add or remove the .dark-theme class from the body
    document.body.classList.toggle('dark-theme');
  };

  return (
    <header className={styles.header}>
      <img src={Logo} alt="Passoia Logo" className={styles.logo} />
      <nav className={styles.nav}>
        <ul>
          <li><a href="#">Looks</a></li>
          <li><a href="#">Lançamentos</a></li>
          <li><a href="#">Novidades</a></li>
        </ul>
      </nav>
      <button onClick={toggleDarkMode} className={styles.toggleButton}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
  );
}
export default Header;