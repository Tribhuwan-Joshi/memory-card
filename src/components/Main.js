import { useEffect, useState } from "react";
import { fetchCardData, shuffleCards, formatCountData } from "../helpers";
import Card from "./Card";

export default function Main({ updateScore, restart }) {
  const [data, setData] = useState();
  const [countArr, setCountArr] = useState([]);

  useEffect(() => {
    fetchCardData().then((cardData) => {
      // fetchCardData is a async function
      setData(cardData);
      setCountArr(formatCountData(cardData));
    });
  }, [restart]);

  function handleCardClick(e) {
    const newCountArr = [...countArr];
    const url = e.target.getAttribute("src");
    const index = newCountArr.findIndex((i) => i.url === url);
    newCountArr[index].count += 1;
    const twoClicks = newCountArr.some(i => i.count > 1);
    if (twoClicks) {
      // setCurrCount = 1
      
    }
    // set currentCount + 1
    // if bestScore > currCount -> set bestScore + 1 and set to localStorage

    // if all clicks -> set CurrentScore = 0 and set restart = true
    
    setCountArr(newCountArr);
  }

  return (
    <main
      className={`flex-1 ${
        restart && "pointer-events-none blur-8"
      } min-w-[300px]  h-max lg:grid-cols-[repeat(5,minmax(200px,1fr))] flex-shrink-0 p-4 bg-gray-800 grid  grid-cols-[repeat(auto-fit,minmax(150px,1fr))] grid-rows-[repeat(2,minmax(200px,1fr))]  gap-6`}
    >
      {data?.map((i) => (
        <Card
          key={i.url}
          url={i.url}
          name={i.name}
          handleCardClick={handleCardClick}
          shuffle={() =>
            setData((data) => {
              let arr = [...data];
              return shuffleCards(arr);
            })
          }
          updateScore={updateScore}
        />
      ))}
    </main>
  );
}
