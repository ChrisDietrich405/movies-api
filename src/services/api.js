import axios from "axios";

export const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie/550?api_key=a043c9e18bae26b0aa2e36b5618fba7d"
}) 

// const axiosClient = axios.create({
//     baseURL: `https://api.example.com`,
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     }
//   });