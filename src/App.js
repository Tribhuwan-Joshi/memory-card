import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { useState } from "react";


function App() {
  
    const [curScore, setCurScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [restart, setRestart] = useState(false);
  function updateScore(e) {    
    // console.log(i);
    setCurScore(curScore=>curScore+1)
    // I want to use setScoreArr
  }
  return (
    <>

      <Header curScore={curScore} bestScore={bestScore} />
      {restart &&
        <div className="w-full fixed  h-full bg-white/70 flex justify-center gap-4 flex-col items-center">
          <p className="text-4xl text-black">You win</p>
          <button className="p-2 bg-slate-700 text-white" onClick={()=>setRestart(prev=>!prev)} >Restart</button>
        </div>
      }
      <Main
        setCurScore={setCurScore}
        setBestScore={setBestScore}
        updateScore={updateScore}
        restart = {restart}
        gameOver = {()=>setRestart(true)}
      />
      <Footer />
    </>
  );
}

export default App;
