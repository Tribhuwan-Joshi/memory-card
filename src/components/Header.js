import Dog from "../assets/headIcon.png";
function CurScore({ curScore }) {
  return (
    <div className="current-score-container text-md">
      <span className="text-base">Current Score - </span>
      <span className="current-score text-base bg-gray-600 p-1">
        {curScore}
      </span>
    </div>
  );
}
function BestSCore({ bestScore }) {
  return (
    <div className="best-score-container text-md ">
      <span className="text-base ">Best Score - </span>
      <span className="best-score text-base bg-gray-600 p-1 ">{bestScore}</span>
    </div>
  );
}

function ScoreCard({ curScore, bestScore }) {
  return (
    <div className="flex gap-10">
      <CurScore curScore={curScore} />
      <BestSCore bestScore={bestScore} />
    </div>
  );
}

export default function Header({ curScore, bestScore }) {
  return (
    <header className=" shadow-md  shadow-gray-400 bg-black h-[10%]  flex justify-around  gap-5 font-[monospace] text-white items-center">
      <div className="flex text-4xl items-center h-full  ">
        <img
          src={Dog}
          alt="dog"
          style={{
            width: "100px",
          }}
        />
        <span className="invisible md:visible lg:visible">Memory Card</span>
      </div>
      <div className="invisible md:visible lg:visible">
        Get points by clicking card only once{" "}
      </div>
      <ScoreCard curScore={curScore} bestScore={bestScore} />
    </header>
  );
}
