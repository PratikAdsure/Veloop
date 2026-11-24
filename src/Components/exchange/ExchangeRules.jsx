import { rules } from '../../data/exchangeData';
import styles from '../../styles/ExchangeRules.module.css';

function ExchangeRules() {
  return (
    <section className={styles.panel}>

      <div className={styles.heading}>
        <h3>▤ Exchange Rules ⓘ</h3>
        <button>View All</button>
      </div>

      {rules.map((rule, index) => (
        <div className={styles.rule} key={index}>

          <span>✓</span>

          <p>{rule}</p>

        </div>
      ))}

    </section>
  );
}

export default ExchangeRules;