async function getData() {
  let res = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=32d4d8eb5d3a4d59bbbef34cda51f943"
  );
  let data = await res.json();
  console.log(data);
  data.results.forEach((movie) => console.log(movie));
}
getData();