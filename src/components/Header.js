import Dog from "../assets/headIcon.png"


function ScoreCard() {
    return (
      <div className="flex gap-10">
        <div className="current-score-container text-md">
          <span className="text-base">Current Score - </span>
          <span className="current-score text-base bg-gray-600 p-1">10</span>
        </div>
        <div className="best-score-container text-md">
          <span className="text-base">Best Score - </span>
          <span className="best-score text-base bg-gray-600 p-1">10</span>
        </div>
      </div>
    );
}

export default function Header() {
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
          <span>Memory Card</span>
        </div>
        <ScoreCard />
      </header>
    );
}