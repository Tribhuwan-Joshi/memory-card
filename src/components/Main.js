import { useEffect, useState } from "react";
import { fetchCardData } from "../helpers";
import Card from "./Card";
export default function Main() {
  const [data, setData] = useState();
  useEffect(() => {
    fetchCardData().then((cardData) => {
      // fetchCard is a async function
      setData(cardData);
    });
  }, []);

  return (
   
    <main className="flex-1  min-w-[300px] h-max lg:grid-cols-[repeat(5,minmax(200px,1fr))] flex-shrink-0 p-2  bg-gray-800 grid  grid-cols-[repeat(auto-fit,minmax(200px,1fr))] grid-rows-[repeat(auto-fit,1fr)]  gap-4">
      {
        data?.map(i => <Card url={i.url} name={i.name} />)
      }
      
    </main>
  );
}
