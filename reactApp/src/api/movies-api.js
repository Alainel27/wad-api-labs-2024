export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=eee4335bdbb01fb77d1a9f87cfbce408&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };