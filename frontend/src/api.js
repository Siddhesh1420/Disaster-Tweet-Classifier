import axios from "axios"

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000"

export const predictTweet = async (text) => {
    const response = await axios.post(`${BASE_URL}/predict`, {
        text: text
    })
    return response.data
}

export const getHistory = async () => {
    const response = await axios.get(`${BASE_URL}/history`)
    return response.data
}