import styles from '../../styles/ExchangeHistory.module.css';

function ExchangeHistory({ history }) {
  return (
    <section className={styles.panel}>

      <div className={styles.heading}>
        <h3>◷ Recent Conversions</h3>
        <button>View All</button>
      </div>

      <div className={styles.list}>

        {history.slice(0, 4).map((item) => (
          <div className={styles.item} key={item.id}>

            <span className={styles.status}>
              ⇄
            </span>

            <div className={styles.details}>
              <strong>
                {item.gems} Gems → {item.ves} VEs
              </strong>

              <small>{item.date}</small>
            </div>

            <b>{item.ves} VEs</b>

          </div>
        ))}

      </div>
    </section>
  );
}

export default ExchangeHistory;