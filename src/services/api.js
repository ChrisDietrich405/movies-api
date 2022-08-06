import axios from "axios";

export const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie/550"
}) 

// const axiosClient = axios.create({
//     baseURL: `https://api.example.com`,
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     }
//   });



