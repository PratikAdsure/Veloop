import styles from '../../styles/ExchangeCard.module.css';

function ExchangeCard({ option, onConvert }) {
  return (
    <div className={`${styles.card} ${styles[option.tone]}`}>

      {option.tag && (
        <span className={styles.tag}>
          {option.tag}
        </span>
      )}

      <div className={styles.conversion}>
        <span className={styles.gem}>💎</span>

        <span className={styles.arrow}>→</span>

        <span className={styles.coin}>VE</span>
      </div>

      <h3>{option.gems} Gems</h3>

      <h4>{option.ves} VEs</h4>

      <button onClick={() => onConvert(option)}>
        Convert Rewards
      </button>

      <p>
        {option.icon} {option.note}
      </p>

    </div>
  );
}

export default ExchangeCard;