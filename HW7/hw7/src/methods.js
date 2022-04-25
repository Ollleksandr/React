import { useState, useEffect } from "react";
import api from "./api/api";

export default function Methods() {
    const [users, setUsers] = useState([]);
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        api.get("/users").then(({ data }) => setUsers(data));
    }, []);

    useEffect(() => {
        api.get("/albums").then(({ data }) => setAlbums(data));
    }, []);
    return {
        users,
        albums,
    };
}
