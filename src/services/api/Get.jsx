import { useEffect, useState } from 'react'
import axios from 'axios'

const Get = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const api_url = import.meta.env.VITE_API_URL

    useEffect(() => {
        axios
            .get(api_url)
            .then((response) => {
                setData(response.data)
                setLoading(false)
            })
            .catch((err) => {
                setError(err.message)
                setLoading(false)
            })
    }, [])

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error}</div>

    return (
        <div>
            <h1>Datas</h1>
            <ul>
                {data.map((movie) => (
                    <li key={movie.id}>{movie.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default Get