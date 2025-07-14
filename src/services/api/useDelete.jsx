import { useState } from 'react'
import axios from 'axios'

const api_url = import.meta.env.VITE_API_URL

export const useDelete = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const deleteData = (endpoint, onSuccess) => {
        setLoading(true)

        axios
            .delete(api_url + endpoint)
            .then(() => {
                setLoading(false)
                onSuccess && onSuccess()
            })
            .catch(err => {
                setError(err.message)
                setLoading(false)
            })
    }
    
  return {deleteData, loading, error}
}
