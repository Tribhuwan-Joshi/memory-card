import { useEffect, useState } from "react";
import { fetchCardData } from "../helpers";
import Card from "./Card";

function shuffleCards(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function Main() {
  const [data, setData] = useState();
  useEffect(() => {
    fetchCardData().then((cardData) => {
      // fetchCard is a async function
      setData(cardData);
    });
  }, []);

  return (
    <main className="flex-1  min-w-[300px] h-max lg:grid-cols-[repeat(5,minmax(200px,1fr))] flex-shrink-0 p-2  bg-gray-800 grid  grid-cols-[repeat(auto-fit,minmax(200px,1fr))] grid-rows-[repeat(2,1fr)]  gap-4">
      {data?.map((i) => (
        <Card
          key={data.indexOf(i)}
          url={i.url}
          name={i.name}
          shuffle={() =>
            setData(data => { let arr = [...data]; return shuffleCards(arr) })
          }
        />
      ))}
    </main>
  );
}
