const url = fetch("./example.json");

console.log(url);

async function getDate() {
  const data = await url;
  console.log(data);
}
getDate();
