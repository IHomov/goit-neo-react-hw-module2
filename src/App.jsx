import { useState } from "react";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";


import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [feedback, setFeedback] = useState({
    good: 5,
    neutral: 3,
    bad: 2,
  });

    const updateFeedback = (feedbackType) => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1, 
    }));
    setCount(prevCount => prevCount + 1); 
  };

    const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
    setCount(0); 
  };
  const totalFeedback = count;
  return (
    <div className="app-container">
      <Description />
      <Options onClick={updateFeedback} total={totalFeedback} reset={resetFeedback}/>
      {totalFeedback > 0 ?(
         <Feedback
        good={feedback.good}
        neutral={feedback.neutral}
        bad={feedback.bad}
        count={totalFeedback}
      />) : ( <Notification />)
        
      }
    </div>
  );
}

export default App;
