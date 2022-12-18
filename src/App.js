import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
  let prevScore = +localStorage.getItem("bestScore") ?? 0;

  const [curScore, setCurScore] = useState(0);
  const [bestScore, setBestScore] = useState(prevScore);
  const [restart, setRestart] = useState(false);

  function updateScore(reset, win, add) {
    // console.log(i);
    if (add) {
      setCurScore((curScore) => curScore + 1);
 
    } else if (reset) {
      setCurScore(1);
    } else if (win) {
      
      setCurScore(curScore=>curScore+1);
      setRestart(true);
      
    }
    
  }

  useEffect(() => {
    if (curScore > bestScore) {
      setBestScore((bestScore) => bestScore + 1);
      localStorage.setItem("bestScore", curScore);
    }
  },[bestScore,curScore])
  return (
    <>
      <Header curScore={curScore} bestScore={bestScore} />
      {restart && (
        <div className="w-full fixed  h-full bg-white/70 flex justify-center gap-4 flex-col items-center">
          <p className="text-4xl text-black">You win</p>
          <button
            className="p-2 bg-slate-700 text-white"
            onClick={() => { setRestart((prev) => !prev); setCurScore(0) }}
          >
            Restart
          </button>
        </div>
      )}
      <Main
        setCurScore={setCurScore}
        setBestScore={setBestScore}
        updateScore={updateScore}
        restart={restart}
        gameOver={() => setRestart(true)}
      />
      <Footer />
    </>
  );
}

export default App;
