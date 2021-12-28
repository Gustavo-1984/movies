import React from 'react'

export const List = ({movies}) => {
    const Favorites = movies.favorites
    return (
        < div className='row col-12 p-5'>
            
            {movies.map((movie, index)=>(
               <div className='col-12 col-md-4 mb-3'>
                   <div className='card'>
                <img key={index} src={movie.Poster} alt='movie' />
                <div className='card-body'>
              <p className='text-dark'>{movie.Title}</p>
              <p className='text-dark'>{movie.Year}</p>
              <p className='text-dark'>{movie.Type}</p>
              <button type='button' className='btn btn-outline-primary' >Añadir a favoritos</button>
             
          </div>
                </div>
                </div>
            ))}
          </div>
         
      
    )
}
