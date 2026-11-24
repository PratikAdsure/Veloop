import styles from '../../styles/ExchangeModal.module.css';

function ExchangeModal({
  option,
  onClose,
  onConfirm,
  gems
}) {
  if (!option) return null;

  const canConvert = gems >= option.gems;

  return (
    <div
      className={styles.backdrop}
      onMouseDown={onClose}
    >

      <div
        className={styles.modal}
        onMouseDown={(e) => e.stopPropagation()}
      >

        <button
          className={styles.close}
          onClick={onClose}
        >
          ×
        </button>

        <div className={styles.icon}>
          💎 → 🪙
        </div>

        <h2>Confirm Conversion</h2>

        <p>Review your exchange before continuing.</p>

        <div className={styles.summary}>

          <div>
            <span>Gems to convert</span>
            <strong>{option.gems} Gems</strong>
          </div>

          <div>
            <span>You will receive</span>
            <strong>{option.ves} VEs</strong>
          </div>

          <div>
            <span>Available Gems</span>
            <strong>{gems}</strong>
          </div>

        </div>

        {!canConvert && (
          <p className={styles.warning}>
            You do not have enough Gems.
          </p>
        )}

        <button
          className={styles.confirm}
          disabled={!canConvert}
          onClick={() => onConfirm(option)}
        >
          Confirm Conversion
        </button>

        <button
          className={styles.cancel}
          onClick={onClose}
        >
          Cancel
        </button>

      </div>
    </div>
  );
}

export default ExchangeModal;