import { useState } from 'react';
import styles from './Batoes.module.scss';
import BatomVermelha from '../../assets/BocaVermelha.png';
import BatomRosa from '../../assets/BocaBase.png';
import BatomRoxo from '../../assets/BocaAzul.png';
import BatomMarrom from '../../assets/BocaMarrom.png';
import BocaBase from '../../assets/BocaBase.png';
import Boleto from '../../assets/boleto.png';
import Mastercard from '../../assets/mastercard.png';
import Visa from '../../assets/visa.png';
import Pix from '../../assets/pix.png';

// componente interativo para seleção de batons
function CardBatoes() {
  // Estado para armazenar a imagem do batom selecionado
  const [selectedBatom, setSelectedBatom] = useState(BocaBase);

  // Função para atualizar a imagem do batom selecionado
  const handleBatomChange = (batomImage) => {
    setSelectedBatom(batomImage);
  };

  return (
    <section className={styles.lancamentos}>
      <h2>Aproveite os Lançamentos</h2>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img src={selectedBatom} alt="Boca com batom" className={styles.mainImage} />
        </div>
        <div className={styles.info}>
          <h3>Batom Matte</h3>
          <p>Escolha sua cor:</p>
          <div className={styles.colorOptions}>
            <button
              type="button"
              aria-label="Vermelho"
              onClick={() => handleBatomChange(BatomVermelha)}
              className={`${styles.colorButton} ${styles.vermelho}`}
            ></button>
            <button
              type="button"
              aria-label="Rosa"
              onClick={() => handleBatomChange(BatomRosa)}
              className={`${styles.colorButton} ${styles.rosa}`}
            ></button>
            <button
              type="button"
              aria-label="Roxo"
              onClick={() => handleBatomChange(BatomRoxo)}
              className={`${styles.colorButton} ${styles.roxo}`}
            ></button>
            <button
              type="button"
              aria-label="Marrom"
              onClick={() => handleBatomChange(BatomMarrom)}
              className={`${styles.colorButton} ${styles.marrom}`}
            ></button>
          </div>
          <p className={styles.price}>R$ 29,90</p>
          <button type="button" className={styles.buyButton} aria-label="Comprar">Comprar</button>
          <div className={styles.paymentMethods}>
            <p>Formas de pagamento:</p>
            <img src={Boleto} alt="Boleto" />
            <img src={Mastercard} alt="Mastercard" />
            <img src={Visa} alt="Visa" />
            <img src={Pix} alt="Pix" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardBatoes;