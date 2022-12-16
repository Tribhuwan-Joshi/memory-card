import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { useState } from "react";
function App() {
  
    const [curScore, setCurScore] = useState(20);
    const [bestScore, setBestScore] = useState(10);
  return (
    <>
      <Header curScore = {curScore} bestScore={bestScore} />
      <Main setCurScore={setCurScore} setBestScore={setBestScore} />
      <Footer/>
   </>
  )
}

export default App;
