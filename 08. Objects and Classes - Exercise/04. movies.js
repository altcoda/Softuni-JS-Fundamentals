function movies(moviesInfo) {

    let moviesList = [];
  
    for (let i = 0; i < moviesInfo.length; i++) {
  
      let movie = "", listHasMovie = false;
      let splitInfo = moviesInfo[i].split(' ');
  
      if (splitInfo.includes('addMovie')) {
        splitInfo.shift();
        movie = splitInfo.join(' ');
  
        listHasMovie = Object.values(moviesList).map(value => value.name).includes(movie);
        if (!listHasMovie) {
          moviesList.push({
            name: movie
          })
        }
      } else if (splitInfo.includes('directedBy')) {
        splitInfo = splitInfo.join(' ').split(' directedBy ')
        movie = splitInfo.shift();
        let director = splitInfo.shift();
  
        listHasMovie = Object.values(moviesList).map(value => value.name).includes(movie);
        if (listHasMovie) {
          let key = Object.keys(moviesList).find(k => moviesList[k].name == movie);
          moviesList[key].director = director;
        }
      } else if (splitInfo.includes('onDate')) {
        splitInfo = splitInfo.join(' ').split(' onDate ')
        movie = splitInfo.shift();
        let date = splitInfo.shift();
  
        listHasMovie = Object.values(moviesList).map(value => value.name).includes(movie);
        if (listHasMovie) {
          let key = Object.keys(moviesList).find(k => moviesList[k].name == movie);
          moviesList[key].date = date;
        }
      }
  
    }
  
    for (let key in moviesList) { //
        let movie = moviesList[key];
        if(movie.director && movie.name && movie.date) {
          console.log(JSON.stringify(moviesList[key]))
      }
    }

}
