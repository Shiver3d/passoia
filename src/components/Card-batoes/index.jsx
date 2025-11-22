import { useState } from 'react';
import styles from './Batoes.module.scss';
import BocaVermelha from '../../assets/BocaVermelha.png';
import BocaRosa from '../../assets/BocaBase.png';
import BocaRoxo from '../../assets/BocaAzul.png';
import BocaMarrom from '../../assets/BocaMarrom.png';
import BocaBase from '../../assets/BocaBase.png';


// componente interativo para seleção de batons
function CardBatoes() {
  // Estado para armazenar a imagem do Boca selecionado e descrição
  const [selectedBoca, setSelectedBoca] = useState(BocaBase);
  const [description, setDescription] = useState('Cor padrão: suave e natural.');

  // Função para atualizar a imagem do Boca selecionado e descrição
  const handleBocaChange = (BocaImage, desc) => {
    setSelectedBoca(BocaImage);
    setDescription(desc);
  };

  return (
    <section className={styles.lancamentos}>
      <h2 id="Lançamentos">APROVEITE OS LANÇAMENTOS</h2>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img src={selectedBoca} alt="Moça com batom" className={styles.mainImage} />
        </div>
        <div className={styles.info}>
          <p>⭐⭐⭐⭐⭐</p>
          <h3>Batões premium a sua disposição</h3>
          <p>Escolha sua cor:</p>
          <div className={styles.colorOptions}>
            <button
              type="button"
              aria-label="Vermelho"
              onClick={() => handleBocaChange(BocaVermelha, 'Vermelho intenso: tom vibrante e marcante.')}
              className={`${styles.colorButton} ${styles.vermelho}`}
            ></button>
            <button
              type="button"
              aria-label="Rosa"
              onClick={() => handleBocaChange(BocaRosa, 'Rosa suave: delicado e romântico.')}
              className={`${styles.colorButton} ${styles.rosa}`}
            ></button>
            <button
              type="button"
              aria-label="Roxo"
              onClick={() => handleBocaChange(BocaRoxo, 'Roxo profundo: ousado e elegante.')}
              className={`${styles.colorButton} ${styles.roxo}`}
            ></button>
            <button
              type="button"
              aria-label="Marrom"
              onClick={() => handleBocaChange(BocaMarrom, 'Marrom terroso: natural e sofisticado.')}
              className={`${styles.colorButton} ${styles.marrom}`}
            ></button>
          </div>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </section>
  );
}

export default CardBatoes;