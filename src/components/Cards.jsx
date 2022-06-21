import React from 'react'

const Cards = ({movie, delet, reset, setNewStateMovies, setUpdateAc}) => {

  const updateUsers = () => {
    setNewStateMovies(true)

    const obj = {
      duration: movie.duration,
      genre: movie.genre,
      name: movie.name,
      release_date: movie.release_date
   }
    reset(obj)
    setUpdateAc(movie)
  }
  
  return (
    <div className='card'>
      
        <h1>{`${movie.id} ${movie.name}`}</h1>
        <ul>
            <li>Duration: {movie.duration}</li>
            <li>Genre: {movie.genre}</li>
            <li>Realise date: {movie.release_date}</li>
            <br />
            <div className='Btn-two'>
            <button onClick={()=>delet(movie.id)}>Eliminar</button>
            <button onClick={updateUsers}>Edit</button>
            </div>
            

        </ul>
    </div>
  )
}

export default Cards