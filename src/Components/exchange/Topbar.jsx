import styles from '../../styles/Topbar.module.css';

function Topbar({ gems, ves }) {
  return (
    <header className={styles.topbar}>

      <div className={styles.balance}>
        <span>💎</span>
        <b>{gems}</b>
        <small>Gems</small>
        <i>＋</i>
      </div>

      <div className={styles.balance}>
        <span>🪙</span>
        <b>{ves.toLocaleString('en-US')}</b>
        <small>VEs</small>
        <i>＋</i>
      </div>

      <button className={styles.bell}>
        ♧
        <sup>•</sup>
      </button>

    </header>
  );
}

export default Topbar;