import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});

export const api = {
    getPosts: async () => {
        let response = await axiosInstance.get("/posts");
        return response.data;
    },

    addNewPost: async (title, body, userId) => {
        let response = await axiosInstance.post("/posts", {
            title,
            body,
            userId,
        });
        return response.data;
    },
};
