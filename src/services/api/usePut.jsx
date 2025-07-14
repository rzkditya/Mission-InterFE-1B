import { useState } from 'react'
import axios from 'axios'

const api_url = import.meta.env.VITE_API_URL

export const usePut = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const updateData = (endpoint, payload, onSuccess) => {
        setLoading(true)

        axios
            .put(api_url + endpoint, payload)
            .then((response) => {
                setLoading(false)
                onSuccess && onSuccess(response.data)
            })
            .catch((err) => {
                setError(err.message)
                setLoading(false)
            })
    }
  return {updateData, loading, error}
}
