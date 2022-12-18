import { useEffect, useState } from "react";
import { fetchCardData, shuffleCards, formatCountData } from "../helpers";
import Card from "./Card";

export default function Main({ updateScore, restart }) {
  const [data, setData] = useState();
  const [countArr, setCountArr] = useState([]);

  useEffect(() => {
    if (restart === false) {
      fetchCardData().then((cardData) => {
        // fetchCardData is a async function
        setData(cardData);
        setCountArr(formatCountData(cardData));
      });
    }
  }, [restart]);

  function handleCardClick(e) {
    const newCountArr = [...countArr];
    const url = e.target.getAttribute("src");

    const index = newCountArr.findIndex((i) => i.url === url);
    console.log(newCountArr);
    newCountArr[index].count += 1;

    const twoClicks = newCountArr.some((i) => i.count > 1);
    const allClicks = newCountArr.every((i) => i.count === 1);

    if (twoClicks) {
      updateScore(1, 0, 0);
      setCountArr((prev) => {
        let clone = [...prev];
        return clone.map((i, e) => { if (e === index) return { ...i, count: 1 }; return { ...i, count: 0 } });
      });
      
      // set the countArr with all 0 except the current onw
    } else if (allClicks) {
      updateScore(0, 1, 0);
      setCountArr((prev) => {
        let clone = [...prev];
        return clone.map((i) => ({...i , count:0}));
      });
    } else {
      updateScore(0, 0, 1);
      setCountArr(newCountArr);
    }
    // set currentCount + 1
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
