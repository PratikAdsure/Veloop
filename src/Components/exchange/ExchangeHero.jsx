import styles from '../../styles/ExchangeHero.module.css';

function ExchangeHero() {
  return (
    <section className={styles.hero}>

      <div className={styles.copy}>
        <h1>Exchange Center</h1>

        <h2>
          Turn Your Earned
          <span> Gems </span>
          Into VEs
        </h2>

        <p>
          Convert your eligible Gems into VEs and
          continue your reward journey.
        </p>
      </div>

      <div className={styles.art}>
        <div className={styles.gem}>💎</div>
        <div className={styles.arrow}>➜</div>
        <div className={styles.coin}>VE</div>
      </div>

    </section>
  );
}

export default ExchangeHero;