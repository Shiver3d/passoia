import styles from './Footer.module.scss';
import pix from '../../assets/pix.png';
import visa from '../../assets/visa.png';
import mc from '../../assets/mastercard.png';
import boleto from '../../assets/boleto.png';

// componente de rodapé 
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerColumns}>
        <div className={styles.column}>
          <h4>Atendimento</h4>
          <ul>
            <li><a href="#">Perguntas Frequentes</a></li>
            <li><a href="#">Fale Conosco</a></li>
            <li><a href="#">Meus pedidos</a></li>
            <li><a href="#">Nossas Lojas</a></li>
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
        <div className={styles.column}>
          <h4>Formas de pagamento</h4>
          <div className={styles.payments}>
            <img src={pix} alt="PIX" />
            <img src={visa} alt="Visa" />
            <img src={mc} alt="Mastercard" />
            <img src={boleto} alt="Boleto" />
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} Passóia. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;