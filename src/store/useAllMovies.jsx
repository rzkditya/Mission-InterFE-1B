import axios from 'axios'
import { create } from 'zustand'

const api_url = import.meta.env.VITE_API_URL

const useAllMovies = create((set, get) => ({
    movies: [],
    loading: false,
    error: false,

    fetchAllMovies: async () => {
        set({ loading: true, error: null})

        try{
            const res = await axios.get(api_url + 'MovieLists')
            set({movies: res.data, loading:false})
        } catch(err) {
            set({
                error: 'Failed to fetch movies', loading: false
            })
        }
    }
}))

export default useAllMovies
