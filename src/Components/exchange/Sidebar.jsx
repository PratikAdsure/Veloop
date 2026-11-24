import styles from '../../styles/Sidebar.module.css';

const links = [
  ['⌂', 'Dashboard'],
  ['▣', 'Wallet'],
  ['♧', 'Rewards'],
  ['☆', 'Level Up & Earn'],
  ['⇄', 'Exchange Center'],
  ['♧', 'Referrals'],
  ['◷', 'History'],
  ['ⓘ', 'Support']
];

function Sidebar() {
  return (
    <aside className={styles.sidebar}>

      <div className={styles.brand}>
        <span>✓</span>

        <div>
          VELOOP
          <small>REWARDS</small>
        </div>
      </div>

      <nav>
        {links.map(([icon, label]) => (

          <a
            href="#"
            key={label}
            className={
              label === 'Exchange Center'
                ? styles.active
                : ''
            }
            onClick={(e) => e.preventDefault()}
          >
            <span>{icon}</span>
            {label}
          </a>

        ))}
      </nav>

      <div className={styles.profile}>
        <div className={styles.avatar}>H</div>

        <div>
          <small>Hello,</small>
          <b>Pratik</b>
          <span>Level 7</span>
        </div>
      </div>

      <div className={styles.promo}>

        <div className={styles.promoGem}>
          💎
        </div>

        <strong>Earn More Gems!</strong>

        <p>
          Complete tasks, refer friends and
          unlock more ways to earn Gems.
        </p>

        <button>Explore Now</button>

      </div>

    </aside>
  );
}

export default Sidebar;