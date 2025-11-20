import NovidadesImg from '../../assets/Novidades.png';
import styles from './Novidades.module.scss';

// html de apresentação de novidades com outro banner
function Novidades() {
  return (
    <section className={styles.novidades}>
      <img src={NovidadesImg} alt="Novidades" className={styles.novidadesImage} />
    </section>
  );
}

export default Novidades;
