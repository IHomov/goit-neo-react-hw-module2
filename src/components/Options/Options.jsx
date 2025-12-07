import styles from './Options.module.css';
function Options({ onClick, total, reset }) {
  return (
    <div className={styles.optionsContainer}>
      <button onClick={() => onClick("good")}>Good</button>
      <button onClick={() => onClick("neutral")}>Neutral</button>
      <button onClick={() => onClick("bad")}>Bad</button>
      {total > 0 &&( 
        <button onClick={reset}>Reset</button>
      )}
    </div>
  );
}

export default Options;
