import { useEffect, useState } from "react";

function getFormatData(data) {
  const res = [];
  for (let i of data) {
    const obj = {};
    obj.url = i.url;
    obj.name = i.breeds[0].name;
    res.push(obj);
  }
  return res;

}


async function fetchCardData() {
  
  const fetchData =  await fetch(
    "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&Content-Type=application/json&limit=10&api_key=live_8vJDx7p1uJxCkX5iVS2M6QKuUvCDZdJ3VF5lg8D2zGIEkNOOHRiHUJNjEVorcM7a",
    { mode: "cors" }
  );
  const data = await fetchData.json();
  
  const formatData =  getFormatData(data);  // format data in proper way
  return formatData;
}

/*const MyComponent = () => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://my-api.com/data');
      const data = await response.json();
      // do something with the data here
    }
    fetchData();
  }, []);

  return (
    // render the component here
  );
}*/




export default  function Main() {
  const [data, setData] = useState();
   useEffect(() => {
    fetchCardData().then((cardData) => {   // fetchCard is a async function 
      setData(cardData)
    })
   }, [])


 
  

  return (
    data && (
      <main className="flex-1 min-w-[300px] h-max lg:grid-cols-[repeat(5,minmax(200px,1fr))] flex-shrink-0 p-2  bg-gray-800 grid  grid-cols-[repeat(auto-fit,minmax(200px,1fr))] grid-rows-[repeat(2,1fr)]  gap-4">
        <div className="border-2 border-red-500 bg-slate-200 flex flex-col">
          {" "}
          <img src={data[0].url} className=" h-full object-cover" alt="tree" />{" "}
          <p className="bg-slate-400 text-center font-semibold font-sans text-lg text-black ">
            {data[0].name}
          </p>{" "}
        </div>
        <div className="bg-slate-200 border-2 border-red-500 flex flex-col">
          {" "}
          <img src={data[1].url} className=" h-full object-cover" alt="tree" />{" "}
          <p className="bg-slate-400 text-center font-semibold font-sans text-lg text-black ">
            {data[1].name}
          </p>{" "}
        </div>
        <div className="border-2 border-red-500 bg-slate-200 flex flex-col">
          {" "}
          <img
            src={data[2].url}
            className=" object-cover h-full w-full "
            alt="tree"
          />{" "}
          <p className="bg-slate-400 text-center font-semibold font-sans text-lg text-black ">
            {data[2].name}
          </p>{" "}
        </div>
        <div className="border-2 border-red-500 bg-slate-200 flex flex-col">
          {" "}
          <img
            src={data[3].url}
            className=" object-cover h-full w-full "
            alt="tree"
          />{" "}
          <p className="bg-slate-400 text-center font-semibold font-sans text-lg text-black ">
            {data[3].name}
          </p>{" "}
        </div>
        <div className="border-2 border-red-500 bg-slate-200 flex flex-col">
          {" "}
          <img
            src={data[4].url}
            className=" object-cover h-full w-full "
            alt="tree"
          />{" "}
          <p className="bg-slate-400 text-center font-semibold font-sans text-lg text-black ">
            {data[4].name}
          </p>{" "}
        </div>
        <div className="border-2 border-red-500 bg-slate-200 flex flex-col">
          {" "}
          <img
            src={data[5].url}
            className=" object-cover h-full w-full "
            alt="tree"
          />{" "}
          <p className="bg-slate-400 text-center font-semibold font-sans text-lg text-black ">
            {data[5].name}
          </p>{" "}
        </div>
        <div className="border-2 border-red-500 bg-slate-200 flex flex-col">
          {" "}
          <img
            src={data[6].url}
            className=" object-cover h-full w-full "
            alt="tree"
          />{" "}
          <p className="bg-slate-400 text-center font-semibold font-sans text-lg text-black ">
            {data[6].name}
          </p>{" "}
        </div>
        <div className="border-2 border-red-500 bg-slate-200 flex flex-col">
          {" "}
          <img
            src={data[7].url}
            className=" object-cover h-full w-full "
            alt="tree"
          />{" "}
          <p className="bg-slate-400 text-center font-semibold font-sans text-lg text-black ">
            {data[7].name}
          </p>{" "}
        </div>
        <div className="border-2 border-red-500 bg-slate-200 flex flex-col">
          {" "}
          <img
            src={data[8].url}
            className=" object-cover h-full w-full "
            alt="tree"
          />{" "}
          <p className="bg-slate-400 text-center font-semibold font-sans text-lg text-black ">
            {data[8].name}
          </p>{" "}
        </div>
        <div className="border-2 border-red-500 bg-slate-200 flex flex-col">
          {" "}
          <img
            src={data[9].url}
            className=" object-cover h-full w-full "
            alt="tree"
          />{" "}
          <p className="bg-slate-400 text-center font-semibold font-sans text-lg text-black ">
            {data[9].name}
          </p>{" "}
        </div>
      </main>
    )
  );
}
