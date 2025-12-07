import styles from './Options.module.css';
function Options({ onClick }) {
  return (
    <div className={styles.optionsContainer}>
      <button onClick={() => onClick("good")}>Good</button>
      <button onClick={() => onClick("neutral")}>Neutral</button>
      <button onClick={() => onClick("bad")}>Bad</button>
    </div>
  );
}

export default Options;
