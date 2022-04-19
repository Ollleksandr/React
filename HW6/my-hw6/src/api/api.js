import Axios from "axios";
const URL = "https://624062682aeb48a9af7365aa.mockapi.io/users";
export default Axios.create({
    baseURL: URL,
    headers: {
        "Content-Type": "application/json",
    },
});
