import Labios from '../../assets/Labios.png';
import Olhos from '../../assets/Olhos.png';
import Rosto from '../../assets/Rosto.png';
import Tendencia from '../../assets/Tendencia.png';
import styles from './Looks.module.scss';

// componente de apresentação de looks e tipos de maquiagem
function Looks() {
  return (
    <section className={styles.looks}>
      <h2>LOOKS E TIPOS DE MAQUIAGEM</h2>
      <div className={styles.grid}>
        <div className={styles.gridItem}>
          <img src={Labios} alt="Lábios" />
        </div>
        <div className={styles.gridItem}>
          <img src={Olhos} alt="Olhos" />
        </div>
        <div className={styles.gridItem}>
          <img src={Rosto} alt="Rosto" />
        </div>
        <div className={styles.gridItem}>
          <img src={Tendencia} alt="Tendência" />
        </div>
      </div>
    </section>
  );
}

export default Looks;

