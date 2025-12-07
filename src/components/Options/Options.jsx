import styles from './Options.module.css';
function Options() {
  return (
    <div className={styles.optionsContainer}>
      <button>Good</button>
      <button>Neutral</button>
      <button>Bad</button>
    </div>
  );
}

export default Options;
