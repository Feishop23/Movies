import React from 'react'


export const Form = ({createNewM, swipMovie, updateAc, handleSubmit, reset, register}) => {
   
   

   const deletUser = {
      duration: '',
      genre: '',
      name: '',
      release_date: ''
   }


   const submit = data => {
    if(updateAc?.id !== undefined){
      swipMovie(updateAc.id, data)
      reset(deletUser)
    }else{createNewM(data)}
     
     reset(deletUser)
     if(deletUser===false){alert('Error')}else{alert('Your files have been uploaded correctly')}
  }
  

  return (
    <>
    
    <form action="" onSubmit={handleSubmit(submit)} className='formForm'>
    
          {/* <label  htmlFor="name"></label> */}
        <input className='Name' placeholder='Name' type="text" id='name' required {...register('name')}/>

          {/* <label  htmlFor="genre"></label> */}
        <input className='Genre' placeholder='Genre' type="text" id='genre' required {...register('genre')}/>

          {/* <label  htmlFor="duration"></label> */}
        <input className='Duration' placeholder='Duration' type="text" id='duration' required {...register('duration')}/>

          {/* <label  htmlFor="date"></label> */}
        <input className='Date' placeholder='Realse date' type="date" id='date' required {...register('release_date')}/>
        <button className='Submit'>Submit</button>
      </form>
      </>
  )
}
export default Form