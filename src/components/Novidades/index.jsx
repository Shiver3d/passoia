import NovidadesImg from '../../assets/Tendencia.png';
import styles from './Novidades.module.scss';

// Component to display the new products banner
function Novidades() {
  return (
    <section className={styles.novidades}>
      <img src={NovidadesImg} alt="Novidades" className={styles.novidadesImage} />
    </section>
  );
}

export default Novidades;
