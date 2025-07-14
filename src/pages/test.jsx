import { useState, useEffect } from "react"
import { useGet, usePost, useDelete, usePut } from "../services/api/api-index"

const Test = () => {
  const [trigger, setTrigger] = useState(false)
  const {data, loading, error} = useGet('MovieLists', trigger)
  const {postData} = usePost()
  const {deleteData} = useDelete()
  const {updateData} = usePut()

  const [newTitle, setNewTitle] = useState('')
  const [deleteId, setDeleteId] = useState('')
  const [updateId, setUpdateId] = useState('')
  const [updateTitle, setUpdateTitle] = useState('')

  const refresh = () => setTrigger(prev => !prev)

  const handleAdd = (e) => {
    e.preventDefault()
    postData('MovieLists', {title: newTitle}, () => {
      alert('Movie Added')
      refresh()
    })
  }

  const handleDelete = (e) => {
    e.preventDefault()
    deleteData(`MovieLists/${deleteId}`, () => {
      alert('Movie Deleted')
      refresh()
    })
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    updateData(`MovieLists/${updateId}`, {title: updateTitle}, () => {
      alert('Movie Updated')
      refresh()
    })
  }

  return (
    <section className='w-full h-full bg-amber-950'>
      {/* Get */}
      <div className='flex flex-col justify-center items-center gap-4 bg-amber-100 p-4 mb-6'>
        <h1 className='text-4xl'>All Movie List</h1>
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-600">{error}</p>}
        <ul className='grid grid-rows-5 grid-flow-col gap-x-4'>
            {data.map((movie) => (
                <li key={movie.id}>{movie.id}. {movie.title}</li>
            ))}
        </ul>
      </div>
      
      <div className="flex justify-center items-center bg-amber-100 mb-6 gap-6">
            {/* Post */}
            <div className='flex flex-col gap-4 p-4 justify-between items-center'>
              <h1 className='text-4xl'>Added Movie</h1>
              <form onSubmit={handleAdd} className='flex flex-col justify-between items-center gap-4'>
                  <input type="text" placeholder='Movie Title' value={newTitle} onChange={(e) => setNewTitle(e.target.value)} className='outline-1'/>
                  <button type='submit' className='outline-1 cursor-pointer'>Add Movie</button>
              </form>
            </div>

            {/* Delete */}
            <div className='flex flex-col gap-4 p-4 justify-between items-center'>
                <h1 className='text-4xl'>Delete Movie</h1>
                <form onSubmit={handleDelete} className='flex flex-col justify-between items-center gap-4'>
                    <input type="number" placeholder='Movie Id' value={deleteId} onChange={(e) => setDeleteId(e.target.value)} className='outline-1'/>
                    <button type='submit' className='outline-1 cursor-pointer'>Delete from My List</button>
                </form>
            </div>
      </div>
      
      {/* Put */}
      <div className='flex flex-col gap-4 bg-amber-100 p-4 justify-between items-center'>
          <h1 className='text-4xl'>Update Movie</h1>
          <p>Edit movie data from All movie databases</p>
          <form onSubmit={handleUpdate} className='flex flex-col justify-between items-center gap-4'>
              <input type="number" placeholder='Movie Id' value={updateId} onChange={(e) => setUpdateId(e.target.value)} className='outline-1'/>
              <input type="text" placeholder='Movie Title' value={updateTitle} onChange={(e) => setUpdateTitle(e.target.value)} className='outline-1'/>
              <button type='submit' className='outline-1 cursor-pointer'>Update movie</button>
          </form>
      </div>
    </section>
  )
}

export default Test