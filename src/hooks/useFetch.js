import { useState, useEffect } from "react";
import { api } from "../api";

export const useFetch = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getPosts = async () => {
            setLoading(true);
            try {
                let response = await api.getPosts();
                setPosts(response);
            } catch (error) {
                alert("ERRO TENTE MAIS TARDE");
            }
            setLoading(false);
        };
        getPosts();
    }, []);

    return { posts, loading };
};
