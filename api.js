/* async function getData() {
  let res = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=32d4d8eb5d3a4d59bbbef34cda51f943"
  );
  let data = await res.json();
  console.log(data);
  data.results.forEach((movie) => console.log(movie));
}
getData();
 */
let apiKey =
  "eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJUZWNoUG9ydCIsImV4cCI6MTcwMzA4MTI0NCwibmJmIjoxNzAyOTk0ODQ0LCJTRVNTSU9OX0lEIjoiZ0YxSHI4OElDVWRDV2RWV2lERnViWHlmaEpzNlh5MFhkSklsIiwiRklOR0VSUFJJTlRfSEFTSCI6IjAwOTk5N0Q5NkM1QjJDMjlGREY3NjU4MURFOUZBOTMwOUZEOTU4RDBBQTc0MDcwMEI0NEUyOEEwNjlEMjRFQUYifQ.kfkb3MIuSG9Z_wQlyJpliJ1vz4SGxX_7RkjGbOC9Txg";
async function getData() {
  let res = await fetch(
    "https://techport.nasa.gov/api/projects?updatedSince=2023-11-05"
  );

  let data = await res.json();
  console.log(data);
}
getData();
