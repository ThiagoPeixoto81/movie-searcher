import axios from "axios";

export async function searchMovie(movie: string) {
  const res = await axios.get(
    `https://www.omdbapi.com/?i=tt3896198&apikey=fd0f5ec4&s=${movie}&type=movie`
  );

  return res.data;
}

export async function findMovie(movie: string) {
  const res = await axios.get(
    `https://www.omdbapi.com/?i=tt3896198&apikey=fd0f5ec4&t=${movie}&type=movie`
  );

  return res.data;
}
