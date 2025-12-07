function Feedback({ good, neutral, bad, total }) {
  return (
    <div>
      
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      
    </div>
  );
}

export default Feedback;