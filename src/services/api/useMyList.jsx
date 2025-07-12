import axios from "axios"

const useMyList = () => {
    const api_url = import.meta.env.VITE_API_URL

    const addToList = async (movieId) => {
        try {
            await axios.post(`${api_url}/add`, { id: movieId} )
        }
    }

  return (
    <div>useMyList</div>
  )
}

export default useMyList