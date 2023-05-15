// Import Axios
import axios from "axios"

const BASE_URL = 'http://localhost:3000'

// Get all Todos
export const getTodos = async () => {
    const response = await axios.get(`${BASE_URL}/todos`)
    if(!response) {
        throw new Error(`Error in the request: ${response}`)
    }
    return response.data
}