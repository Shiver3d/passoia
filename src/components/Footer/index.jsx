import styles from './Footer.module.scss';

// componente de rodapé 
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerColumns}>
        <div className={styles.column}>
          <h4>Atendimento</h4>
          <ul>
            <li><a href="#">Central de Atendimento</a></li>
            <li><a href="#">Fale Conosco</a></li>
            <li><a href="#">Trocas e Devoluções</a></li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Nossas Redes</h4>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} Passóia. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;