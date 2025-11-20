import { useState } from 'react';
import Logo from '../../assets/LogoPrincipal.png';
import styles from './Header.module.scss';

function Header() {
  // estado para controlar o tema escuro
  const [darkMode, setDarkMode] = useState(false);

  // Função para alternar o tema escuro
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Aplicar ou remover a classe de tema escuro no body
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