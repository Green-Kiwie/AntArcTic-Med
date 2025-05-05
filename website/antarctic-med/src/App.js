import logo from './logo.svg';
import './App.css';
import MatchCard from './components/switchitup/MatchCard';

import { useState } from 'react';
import StartScreen from './components/switchitup/StartScreen';

function App() {
  const [currentTask, setCurrentTask] = useState("A");
  const [rightCount, setRightCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [onStartScreen, setOnStartScreen] = useState(true); //My doing


  return (


    <div className="App">
      <header className="App-header">
      {onStartScreen ? (
        <StartScreen setOnStartScreen={setOnStartScreen} />
				) : (
          <>
        <MatchCard currentTask={currentTask} 
                   setRightCount={setRightCount} 
                   setWrongCount={setWrongCount}
                   cardValues={{imgPath: logo, tasks: ["A", "C"]}}/>
        <MatchCard currentTask={currentTask}
                   setRightCount={setRightCount}
                   setWrongCount={setWrongCount}
                   cardValues={{imgPath: logo, tasks: ["B", "C"]}}/>

        <p>
          Right Count: {rightCount}, Wrong Count: {wrongCount};
        </p>

        <button onClick={() => {
          setCurrentTask(currentTask === "A" ? "B" : "A");
        }}>
          Swap Current Task | From: {currentTask} to {currentTask === "A" ? "B" : "A"}
        </button>

        <button onClick={() => {
          setCurrentTask("C");
        }}>
          Change current task to C
        </button>
        </>
        )}
      </header>
    </div>
  );
}

export default App;
