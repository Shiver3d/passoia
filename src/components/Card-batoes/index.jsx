import { useState } from 'react';
import styles from './Batoes.module.scss';
import BocaVermelha from '../../assets/BocaVermelha.png';
import BocaRosa from '../../assets/BocaBase.png';
import BocaRoxo from '../../assets/BocaAzul.png';
import BocaMarrom from '../../assets/BocaMarrom.png';
import BocaBase from '../../assets/BocaBase.png';


// componente interativo para seleção de batons
function CardBatoes() {
  // Estado para armazenar a imagem do Boca selecionado
  const [selectedBoca, setSelectedBoca] = useState(BocaBase);

  // Função para atualizar a imagem do Boca selecionado
  const handleBocaChange = (BocaImage) => {
    setSelectedBoca(BocaImage);
  };

  return (
    <section className={styles.lancamentos}>
      <h2>APROVEITE OS LANÇAMENTOS</h2>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img src={selectedBoca} alt="Boca com Boca" className={styles.mainImage} />
        </div>
        <div className={styles.info}>
          <h3>Boca Matte</h3>
          <p>Escolha sua cor:</p>
          <div className={styles.colorOptions}>
            <button
              type="button"
              aria-label="Vermelho"
              onClick={() => handleBocaChange(BocaVermelha)}
              className={`${styles.colorButton} ${styles.vermelho}`}
            ></button>
            <button
              type="button"
              aria-label="Rosa"
              onClick={() => handleBocaChange(BocaRosa)}
              className={`${styles.colorButton} ${styles.rosa}`}
            ></button>
            <button
              type="button"
              aria-label="Roxo"
              onClick={() => handleBocaChange(BocaRoxo)}
              className={`${styles.colorButton} ${styles.roxo}`}
            ></button>
            <button
              type="button"
              aria-label="Marrom"
              onClick={() => handleBocaChange(BocaMarrom)}
              className={`${styles.colorButton} ${styles.marrom}`}
            ></button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardBatoes;