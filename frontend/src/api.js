import axios from "axios"
export const predictTweet = async (text) => {
    const response = await axios.post('http://localhost:8000/predict', {
        text: text
    })
    return response.data
}
export const getHistory = async (text) => {
    const response = await axios.get('http://localhost:8000/history')
    return response.data
}
