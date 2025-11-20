import BannerImg from '../../assets/Banner.png';
import styles from './Banner.module.scss';

// Component to display the main banner
function Banner() {
  return (
    <section className={styles.banner}>
      <img src={BannerImg} alt="Main Banner" className={styles.bannerImage} />
    </section>
  );
}

export default Banner;