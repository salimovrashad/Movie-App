import database from '../../firebase/firebaseConfig'

export const addMovie = (movie)=>({
    type: "ADD_MOVIE",
    movie
  });

  export const addMovieToDatabase = (movieData={})=>{
    return (dispatch) => {
      const { image='', title='',price='',rate='' } = movieData;
      const movie = {image,title,price,rate};
  
      database.ref("movies").push(movie).then((res) => {
          dispatch(addMovie({
              id: res.key,
              ...movie
          }))
      })
  }
  }



  export const editMovie =(id,update)=>({
    type:"EDIT_MOVIE",
    id,
    update
  })



export const editMovieFromDatabase = (id, updates) => {
    return (dispatch) => {
        return database.ref(`movies/${id}`).update(updates).then(() => {
            dispatch(editMovie(id,updates));
        })
    }
}
  


  export const deleteMovie =(id)=>({
    type:"REMOVE_MOVIE",
    myid:id
  })

export const removeMovieFromDatabase = (id) => {
    return (dispatch) => {
        return database.ref(`movies/${id}`).remove().then(() => {
            dispatch(deleteMovie(id));
        })
    }   
}

  export const getMovies = (movies) => ({
    type: "GET_MOVIES",
    movies
})

export const getMoviesFromDatabase = () => {
    return (dispatch) => {
        return database.ref("movies").once("value").then((snapshot) => {
            const movies = [];

            snapshot.forEach((movie) => {
                movies.push({
                    id: movie.key,
                    ...movie.val()
                })
            })

            dispatch(getMovies(movies));
        })
    }
}