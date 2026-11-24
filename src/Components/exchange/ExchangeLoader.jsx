import styles from '../../styles/ExchangeLoader.module.css';

function ExchangeLoader() {
  return (
    <div className={styles.loaderWrap}>

      <span className={styles.loader}></span>

      Loading exchange options...

    </div>
  );
}

export default ExchangeLoader;