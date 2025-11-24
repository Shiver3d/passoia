import { useState, useEffect, useRef } from 'react';
import Logo from '../../assets/LogoPrincipal.png';
import LogoAlt from '../../assets/LogoPrincipalAlt.png';
import SolIcon from '../../assets/sol.svg';
import LuaIcon from '../../assets/lua.svg';
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

  // estado do menu hamburger
  const [menuOpen, setMenuOpen] = useState(false);
  // controlar montagem do menu para permitir animações de fechamento
  const [menuVisible, setMenuVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const overlayRef = useRef(null);
  const sideRef = useRef(null);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  // quando menuOpen muda, controlar montagem/fechamento
  useEffect(() => {
    if (menuOpen) {
      setMenuVisible(true);
      setIsClosing(false);
    } else if (menuVisible) {
      // inicia animação de fechamento
      setIsClosing(true);
    }
  }, [menuOpen]);
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
        <img src={darkMode ? LuaIcon : SolIcon} alt={darkMode ? 'Ícone do sol' : 'Ícone da lua'} />
      </button>

      {/* Ícone hamburger */}
      <button
        className={styles.hamburgerButton}
        aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className={styles.hamburgerIcon} aria-hidden="true" />
      </button>

      {/* menu lateral com animação de entrada/saída */}
      {menuVisible && (
        <>
          <div
            ref={overlayRef}
            className={`${styles.menuOverlay} ${isClosing ? styles.closingOverlay : ''}`}
            onClick={closeMenu}
            onAnimationEnd={() => {
              if (isClosing) {
                setMenuVisible(false);
                setIsClosing(false);
              }
            }}
          />
          <aside
            ref={sideRef}
            className={`${styles.sideMenu} ${isClosing ? styles.closingSideMenu : ''}`}
            role="dialog"
            aria-modal="true"
            onAnimationEnd={() => {
              if (isClosing) {
                setMenuVisible(false);
                setIsClosing(false);
              }
            }}
          >
            <nav className={styles.menuNav} aria-label="Menu lateral">
              <ul>
                <li className={styles.menuItem}><a href="#Looks" onClick={closeMenu}>Looks</a></li>
                <li className={styles.menuItem}><a href="#Lançamentos" onClick={closeMenu}>Lançamentos</a></li>
                <li className={styles.menuItem}><a href="#Novidades" onClick={closeMenu}>Novidades</a></li>
              </ul>
            </nav>
            <button
              className={styles.menuToggleButton}
              onClick={() => { toggleDarkMode(); }}
              aria-pressed={darkMode}
            >
              <img src={darkMode ? LuaIcon : SolIcon} alt={darkMode ? 'Ícone do sol' : 'Ícone da lua'} />
            </button>
          </aside>
        </>
      )}
    </header>
  );
}

export default Header;