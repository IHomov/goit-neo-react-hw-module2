import { useState, useEffect } from "react";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

import "./App.css";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem("feedback");
    return savedFeedback
      ? JSON.parse(savedFeedback)
      : { good: 0, neutral: 0, bad: 0 };
  });

const hasFeedback = feedback.good > 0 || feedback.neutral > 0 || feedback.bad > 0;

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      
        ...prevFeedback,
        [feedbackType]: prevFeedback[feedbackType] + 1,
      }));
  };


  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
    
    localStorage.removeItem("feedback");
  };
  const totalVotes = feedback.good + feedback.neutral + feedback.bad;

  const positiveFeedback = totalVotes
    ? Math.round((feedback.good / totalVotes) * 100)
    : 0;

  return (
    <div className="app-container">
      <Description />
      <Options
        onClick={updateFeedback}
        total={totalVotes}
        reset={resetFeedback}
      />
      {hasFeedback && totalVotes > 0 ? (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={totalVotes}
          positive={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
