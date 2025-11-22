import { useEffect, useRef, useState } from 'react';
import Labios from '../../assets/Labios.png';
import Olhos from '../../assets/Olhos.png';
import Rosto from '../../assets/Rosto.png';
import Tendencia from '../../assets/Tendencia.png';
import styles from './Looks.module.scss';

// componente de apresentação de looks e tipos de maquiagem
function Looks() {
  const slides = [Labios, Olhos, Rosto, Tendencia];
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 468 : false);
  const trackRef = useRef(null);
  const touchStartX = useRef(0);
  const touchDelta = useRef(0);
  const autoplayRef = useRef(null);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 468);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    autoplayRef.current = setInterval(() => {
      setIndex(i => (i + 1) % slides.length);
    }, 3000);
    return () => clearInterval(autoplayRef.current);
  }, [isMobile, slides.length]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.style.transition = 'transform 400ms ease';
    track.style.transform = `translateX(-${index * 100}%)`;
  }, [index]);

  const prev = () => setIndex(i => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex(i => (i + 1) % slides.length);

  const onTouchStart = (e) => {
    clearInterval(autoplayRef.current);
    touchStartX.current = e.touches[0].clientX;
    touchDelta.current = 0;
  };
  const onTouchMove = (e) => {
    const x = e.touches[0].clientX;
    touchDelta.current = x - touchStartX.current;
  };
  const onTouchEnd = () => {
    const delta = touchDelta.current;
    if (Math.abs(delta) > 40) {
      if (delta < 0) next(); else prev();
    }
    if (isMobile) {
      autoplayRef.current = setInterval(() => setIndex(i => (i + 1) % slides.length), 3000);
    }
  };

  return (
    <section className={styles.looks}>
      <h2 id="Looks">LOOKS E TIPOS DE MAQUIAGEM</h2>

      {/* Desktop / tablet grid */}
      <div className={styles.grid}>
        {slides.map((src, i) => (
          <div key={i} className={styles.gridItem}>
            <img src={src} alt={`Look ${i + 1}`} />
          </div>
        ))}
      </div>

      {/* Mobile interactive carousel */}
      <div className={styles.carousel}>
        <div className={styles.viewport}>
          <div
            className={styles.track}
            ref={trackRef}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {slides.map((src, i) => (
              <div key={i} className={styles.slide}>
                <img src={src} alt={`Look ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
        <button className={styles.prev} aria-label="Anterior" onClick={prev}>‹</button>
        <button className={styles.next} aria-label="Próximo" onClick={next}>›</button>
        <div className={styles.dots}>
          {slides.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === index ? styles.active : ''}`}
              aria-label={`Ir para slide ${i + 1}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Looks;

