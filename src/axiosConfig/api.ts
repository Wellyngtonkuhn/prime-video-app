import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzkzMWY5MmFlYjhhZmYyYTRkOTBlYWQxMTM1NWU2ZiIsInN1YiI6IjYxOTI3M2UwNDU4MTk5MDA4ZjkxYjZkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tke3AGWGh1gxKQ64TicRgiePaOuOS-5qUU8KwLlCyyc`,
    "Content-Type": "application/json;charset=utf-8",
  },
});
