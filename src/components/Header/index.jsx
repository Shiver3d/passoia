import { useState, useEffect } from 'react';
import Logo from '../../assets/LogoPrincipal.png';
import LogoAlt from '../../assets/LogoPrincipalAlt.png';
import styles from './Header.module.scss';

function Header() {
  // estado para controlar o tema escuro
  const [darkMode, setDarkMode] = useState(false);

  // Função para alternar o tema escuro
  const toggleDarkMode = () => {
    const next = !darkMode;
    setDarkMode(next);
    // Aplicar ou remover a classe de tema escuro no body de forma determinística
    document.body.classList.toggle('dark-theme', next);
  };

  // hamburger menu state
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);
  return (
    <header className={styles.header}>
  <img src={darkMode ? LogoAlt : Logo} alt="Passoia Logo" className={styles.logo} />
      <nav className={styles.nav}>
        <ul>
          <li><a href="#Looks">Looks</a></li>
          <li><a href="#Lançamentos">Lançamentos</a></li>
          <li><a href="#Novidades">Novidades</a></li>
        </ul>
      </nav>

      <button
        type="button"
        onClick={toggleDarkMode}
        className={styles.toggleButton}
        aria-pressed={darkMode}
        aria-label={darkMode ? 'Ativar modo claro' : 'Ativar modo escuro'}
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>

      {/* Hamburger icon*/}
      <button
        className={styles.hamburgerButton}
        aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className={styles.hamburgerIcon} aria-hidden="true" />
      </button>

      {/* menu lateral */}
      {menuOpen && (
        <>
          <div className={styles.menuOverlay} onClick={closeMenu} />
          <aside className={styles.sideMenu} role="dialog" aria-modal="true">
            <div className={styles.menuNav}>
              <div className={styles.menuItem}><a href="#" onClick={closeMenu}>Looks</a></div>
              <div className={styles.menuItem}><a href="#" onClick={closeMenu}>Lançamentos</a></div>
              <div className={styles.menuItem}><a href="#" onClick={closeMenu}>Novidades</a></div>
            </div>
            <button
              className={styles.menuToggleButton}
              onClick={() => { toggleDarkMode(); }}
              aria-pressed={darkMode}
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </aside>
        </>
      )}
    </header>
  );
}

export default Header;