import { useEffect, useState } from "react";
import { fetchCardData, shuffleCards } from "../helpers";
import Card from "./Card";

function formatData(data) {
  let res = [];
  for (let i of data) {
    let obj = {};
    obj.count = 0;
    obj.url = i.url;
  }
  return res;
}

export default function Main({ updateScore ,restart}) {
  const [data, setData] = useState();
  const [countArr, setCountArr] = useState([]);

  useEffect(() => {
    fetchCardData()
      .then((cardData) => {
        // fetchCardData is a async function
        setData(cardData);
      })
     
 
  }, [restart]);

  return (
    <main className={`flex-1 ${restart && 'pointer-events-none blur-8'} min-w-[300px]  h-max lg:grid-cols-[repeat(5,minmax(200px,1fr))] flex-shrink-0 p-4 bg-gray-800 grid  grid-cols-[repeat(auto-fit,minmax(150px,1fr))] grid-rows-[repeat(2,minmax(200px,1fr))]  gap-6`}>
      
      {data?.map((i) => (
        <Card
          key={i.url}
          url={i.url}
          name={i.name}
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


