import styles from '../../styles/ConversionSuccess.module.css';

function ConversionSuccess({ conversion, onClose }) {
  if (!conversion) return null;

  return (
    <div className={styles.backdrop}>

      <div className={styles.modal}>

        <div className={styles.check}>
          ✓
        </div>

        <h2>Conversion Successful!</h2>

        <p>
          Your Gems have been converted into VEs.
        </p>

        <h1>
          +{conversion.ves} VEs
        </h1>

        <small>
          {conversion.gems} Gems converted successfully
        </small>

        <button onClick={onClose}>
          Done
        </button>

      </div>
    </div>
  );
}

export default ConversionSuccess;