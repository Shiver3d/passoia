import styles from "./Footer.module.scss"; // Importa os estilos SCSS como um objeto

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <p>
        &copy; {new Date().getFullYear()} Passóia. Todos os direitos
        reservados.
      </p>
      <div className={styles.socialLinks}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </div>
      <p>
        Desenvolvido com ❤️ por{" "}
        <a href="https://github.com/Shiver3d" target="_blank" rel="noopener noreferrer">
          Shiver3d
        </a>
      </p>
    </footer>
  );
}

export default Footer;