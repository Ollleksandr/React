import Axios from "axios";
const URL = "https://jsonplaceholder.typicode.com";
export default Axios.create({
    baseURL: URL,
    headers: {
        "Content-Type": "application/json",
    },
});
