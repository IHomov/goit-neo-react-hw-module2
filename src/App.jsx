import { useState } from 'react';
import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';


import './App.css';

function App() {
  const [count, setCount] = useState(0)
const [feedback] = useState({
    good: 5,
    neutral: 3,
    bad: 2
  });
  return (
    <div className="app-container">
     <Description />
     <Options/>
     <Feedback good={feedback.good} neutral={feedback.neutral} bad={feedback.bad}/>
     
      
    </div>
  )
}

export default App;
