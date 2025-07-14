import { useState } from 'react'
import axios from 'axios'

const api_url = import.meta.env.VITE_API_URL

export const usePost = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const postData = (endpoint, payload, onSuccess) => {
        setLoading(true)
        axios
            .post(api_url + endpoint, payload)
            .then((response) => {
                setLoading(false)
                onSuccess && onSuccess(response.data)
            })
            .catch((err) => {
                setError(err.message)
                setLoading(false)
        })
    }

    return { postData, loading, error}
}
