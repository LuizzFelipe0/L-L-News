import axios from "axios";

const API = axios.create({
    baseURL: "https://newsapi.org/v2/"
    
    // key: 833e960f41774021882738190b34fd1e
})

export default API;
