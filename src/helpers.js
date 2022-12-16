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
  const fetchData = await fetch(
    "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&Content-Type=application/json&limit=10&api_key=live_8vJDx7p1uJxCkX5iVS2M6QKuUvCDZdJ3VF5lg8D2zGIEkNOOHRiHUJNjEVorcM7a",
    { mode: "cors" }
  );
  const data = await fetchData.json();

  const formatData = getFormatData(data); // format data in proper way
  return formatData;
}

export {fetchCardData,getFormatData}