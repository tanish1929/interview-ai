import axios from "axios"


const api = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true
})

// Add token to request headers if it exists
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("auth_token")
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

export async function register({ username, email, password }) {

    try {
        const response = await api.post('/api/auth/register', {
            username, email, password
        })
        
        // Store token in localStorage
        if (response.data.token) {
            localStorage.setItem("auth_token", response.data.token)
        }

        return response.data

    } catch (err) {

        console.error("Register error:", err.response?.data?.message || err.message)
        throw err

    }

}

export async function login({ email, password }) {

    try {

        const response = await api.post("/api/auth/login", {
            email, password
        })

        // Store token in localStorage
        if (response.data.token) {
            localStorage.setItem("auth_token", response.data.token)
        }

        return response.data

    } catch (err) {
        console.error("Login error:", err.response?.data?.message || err.message)
        throw err
    }

}

export async function logout() {
    try {

        const response = await api.get("/api/auth/logout")

        // Clear token from localStorage
        localStorage.removeItem("auth_token")

        return response.data

    } catch (err) {
        // Clear token from localStorage even if logout fails
        localStorage.removeItem("auth_token")
    }
}

export async function getMe() {

    try {

        const response = await api.get("/api/auth/get-me")

        return response.data

    } catch (err) {
        console.log(err)
    }

}