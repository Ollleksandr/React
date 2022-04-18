import { useCallback, useEffect, useState } from "react";

export default function StickerMethods() {
    const [objState, setObjState] = useState([]);

    const URL = "https://624062682aeb48a9af7365aa.mockapi.io/Mystickers";

    useEffect(() => {
        fetch(URL)
            .then((res) => res.json())
            .then((data) => setObjState(data));
    }, []);

    //  function useAsync(cb, defaultValue = []) {
    //     const [status, setStatus] = useState("IDLE");
    //     const [data, setData] = useState(defaultValue);

    //     function run() {
    //       setStatus("LOADING");

    //       cb()
    //         .then((data) => {
    //           setStatus("DONE");
    //           setData(data);
    //           return data;
    //         })
    //         .catch((error) => {
    //           setStatus("ERROR");
    //           return Promise.reject(error);
    //         });
    //     }

    //     return {
    //       status,
    //       data,
    //       setData,
    //       run,
    //     };
    //   }

    function onAddButtonClick() {
        const newSticker = {
            description: "",
        };
        fetch(URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newSticker),
        })
            .then((resp) => resp.json())
            .then((data) => {
                setObjState([...objState, data]);
            });
    }

    const onDeleteButtonClick = useCallback(
        (id) => {
            fetch(URL + "/" + id, {
                method: "DELETE",
            }).then((res) => res.json());
            const newObjState = objState.filter((objState) => objState.id !== id);
            setObjState(newObjState);
        },
        [objState]
    );

    function updateSticker(list) {
        const id = list.id;
        const description = list.description;

        fetch(URL + "/" + id, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, description }),
        }).then((res) =>
            res
                .json()
                .then((data) =>
                    setObjState((objState) => objState.map((objState) => (objState.id === id ? data : objState)))
                )
        );
    }

    return {
        objState,
        onAddButtonClick,
        onDeleteButtonClick,
        updateSticker,
        // useAsync,
    };
}
