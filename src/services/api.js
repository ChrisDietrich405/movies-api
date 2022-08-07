import axios from "axios";

export const api = axios.create({
    baseURL: "http://www.omdbapi.com/"
}) 



// const axiosClient = axios.create({
//     baseURL: `https://api.example.com`,
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     }
//   });



