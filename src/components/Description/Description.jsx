import styles from './Description.module.css';
function Description() {
  return (
    <div>
      <h2 className={styles.profile} >Sip Happens Café</h2>
      <p className={styles.profile}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
}

export default Description;
