import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'
import Cards from './components/Cards'
import { Form } from './components/Form'
import { useForm } from 'react-hook-form'



function App() {

  

      const URL = `https://movies-crud-academlo.herokuapp.com/movies/`
      const [movies, setMovies] = useState()
      const [NewStateMovies, setNewStateMovies] = useState(false)
      const [updateAc, setUpdateAc] = useState()
      const {register, handleSubmit, reset} = useForm()

    const gatCards = () => {
      axios.get(URL)
      .then(res => setMovies(res.data))
      .catch(err => console.log(err))
    }

    useEffect(()=> {gatCards()},[])

      
    const delet = id => {
      axios.delete(`https://movies-crud-academlo.herokuapp.com/movies/${id}/`)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
      .finally(()=>gatCards())
      if(delet===false){alert('Error')}else{alert('It has been successfully deleted')}
    }


    const createNewM = (caMovie) => {
      console.log(caMovie)
      axios.post(URL, caMovie)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
      .finally(()=> gatCards())
    }
      

    const swipMovie = (id, swipUsers) => {
      
      axios.patch(`${URL}${id}/`, swipUsers)
      .then(res => {console.log(res.data)
        setUpdateAc()
        gatCards()
        setNewStateMovies(false)
      
      })
      .catch(err => console.log(err))
      
    }
    
    const createNewMovie = () => {
      const objs = {
          duration: '',
          genre: '',
          name: '',
          release_date: ''
      }
      reset(objs)
      setNewStateMovies(!NewStateMovies)
      
    }

    return (
      <div className='Fondo'>
      <div className="App">
        <div className='Btn_Init'>
        <button className='Btn-Init' onClick={createNewMovie}>{NewStateMovies?"Guardar Formulario":"Crear Formulario"}</button>
        </div>
        {
           NewStateMovies && <Form 
           createNewM={createNewM}
           updateAc={updateAc}
           swipMovie={swipMovie}
           reset={reset}
           handleSubmit={handleSubmit}
           register={register}

           />
        }
        
        {
          movies?.map(movie => (<Cards
          key={movie.id}
          movie={movie}
          delet={delet}
          createNewM={createNewM}
          swipMovie={swipMovie}
          setNewStateMovies={setNewStateMovies}
          setUpdateAc={setUpdateAc}
          reset={reset}
          />))
        }
      </div>

      </div>
    )
  }

export default App
