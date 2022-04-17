// import "../constance/constance";
const URL = "https://624062682aeb48a9af7365aa.mockapi.io/Mystickers";

export function getData() {
    return fetch(URL).then((res) => res.json());
}

export function deleteSticker(id) {
    return fetch(URL + "/" + id, {
        method: "DELETE",
    }).then((res) => res.json());
}
export function postSticker() {
    const newSticker = {
        description: "",
    };
    fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newSticker),
    }).then((resp) => resp.json());
}

export function updateSticker(sticker, description) {
    fetch(URL + sticker.id, {
        method: "PUT",
        body: JSON.stringify(sticker, description),
        headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());
    // .then((data) => console.log(data));
}
