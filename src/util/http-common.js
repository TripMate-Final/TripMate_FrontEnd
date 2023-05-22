import axios from "axios"
export default axios.create({
    baseURL: "http://localhost:80",
    Headers: {
        "Content-Type": "application/json"
    }
});