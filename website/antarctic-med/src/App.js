import logo from './logo.svg';
import './App.css';
import MatchCard from './components/switchitup/MatchCard';

import { useState } from 'react';
import SwitchItUp from "./game/SwitchItUp";

function App() {
  const [currentTask, setCurrentTask] = useState("A");
  const [rightCount, setRightCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);

  return (
    <div className="App">
      <SwitchItUp/>
    {/*  <header className="App-header">*/}
    {/*    <MatchCard currentTask={currentTask} */}
    {/*               setRightCount={setRightCount} */}
    {/*               setWrongCount={setWrongCount}*/}
    {/*               cardValues={{imgPath: logo, tasks: ["A", "C"]}}/>*/}
    {/*    <MatchCard currentTask={currentTask}*/}
    {/*               setRightCount={setRightCount}*/}
    {/*               setWrongCount={setWrongCount}*/}
    {/*               cardValues={{imgPath: logo, tasks: ["B", "C"]}}/>*/}

    {/*    <p>*/}
    {/*      Right Count: {rightCount}, Wrong Count: {wrongCount};*/}
    {/*    </p>*/}

    {/*    <button onClick={() => {*/}
    {/*      setCurrentTask(currentTask === "A" ? "B" : "A");*/}
    {/*    }}>*/}
    {/*      Swap Current Task | From: {currentTask} to {currentTask === "A" ? "B" : "A"}*/}
    {/*    </button>*/}

    {/*    <button onClick={() => {*/}
    {/*      setCurrentTask("C");*/}
    {/*    }}>*/}
    {/*      Change current task to C*/}
    {/*    </button>*/}
    {/*  </header>*/}
    </div>
  );
}

export default App;
