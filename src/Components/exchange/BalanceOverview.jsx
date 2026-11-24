import styles from '../../styles/BalanceOverview.module.css';

function BalanceCard({ icon, label, amount, caption, type }) {
  return (
    <div className={`${styles.card} ${styles[type]}`}>

      <div className={styles.icon}>
        {icon}
      </div>

      <div>
        <div className={styles.label}>
          {label} ⓘ
        </div>

        <strong>
          {amount.toLocaleString('en-US')}
        </strong>

        <small>{caption}</small>
      </div>

    </div>
  );
}

function BalanceOverview({ gems, ves }) {
  return (
    <div className={styles.wrapper}>

      <BalanceCard
        icon="💎"
        label="Available Gems"
        amount={gems}
        caption="Your Reward Gems"
        type="gem"
      />

      <BalanceCard
        icon="🪙"
        label="Available VEs"
        amount={ves}
        caption="Your VEs Balance"
        type="ve"
      />

    </div>
  );
}

export default BalanceOverview;