import axios from "axios"

export default axios.create({
    baseURL: "http://localhost:9999",
    Headers: {
        "Content-Type": "application/json"
    }
});