import { useState } from "react";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";


import "./App.css";

function App() {
  
  const [feedback, setFeedback] = useState({
    good: 5,
    neutral: 3,
    bad: 2,
  });
  const [hasFeedback, setHasFeedback] = useState(false);

    const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => {
      const newFeedback = { 
        ...prevFeedback, 
        [feedbackType]: prevFeedback[feedbackType] + 1 
      };
      if (newFeedback.good > 0 || newFeedback.neutral > 0 || newFeedback.bad > 0) {
        setHasFeedback(true); 
      }
      return newFeedback;
    });
  };

    const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
    setHasFeedback(false);
  };
    const totalVotes = feedback.good + feedback.neutral + feedback.bad;
 
 


 const positiveFeedback =  totalVotes
    ? Math.round((feedback.good / totalVotes) * 100)
    : 0; 

  return (
    <div className="app-container">
      <Description />
      <Options onClick={updateFeedback} total={totalVotes} reset={resetFeedback}/>
      {hasFeedback && totalVotes > 0 ?(
         <Feedback
        good={feedback.good}
        neutral={feedback.neutral}
        bad={feedback.bad}
        total={totalVotes}
        positive={positiveFeedback}
        
      />) : ( <Notification />)
        
      }
    </div>
  );
}

export default App;
