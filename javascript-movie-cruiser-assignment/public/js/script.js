let favMoiveList = [];
let allMovieList = '';
function getMovies() {
	return fetch('http://localhost:3000/movies')
	.then((movieData)=>{
		return movieData.json();
	})
	.then((movieDataInJson)=>{
		let movieDataLocal = '';
		let moviesList = document.getElementById('moviesList');
		movieDataInJson.forEach(movieElement => {
		movieDataLocal = movieDataLocal + `<tr><td>${movieElement.title}</td><td><img 
		src="${movieElement.posterPath}" alt=""></td><td><button 
		onclick="addFavourite('${movieElement.id}')">Add to Fav</button></td></tr>`;
		});
		moviesList.innerHTML = `<table border=1>${movieDataLocal}</table>`;
		allMovieList = movieDataInJson;
		// allMovieList.push(movieDataInJson);
		return movieDataInJson;
	})
	.catch(()=>{
		// console.log(error);
	});
}
function getFavourites() {
		return fetch('http://localhost:3000/favourites')
	.then((favMovieData)=>{
		return favMovieData.json();
	})
	.then((favMovieListInJson)=>{
		let favMovieLocal = '';
	//	let favouritesList = document.getElementById('favouritesList');
		favMovieListInJson.forEach(favMovElement=>{
			favMovieLocal = favMovieLocal + `<tr><td>${favMovElement.title}</td><td>
			<img src="${favMovElement.posterPath}" alt=""></td></tr>`;
		});
		document.getElementById('favouritesList').innerHTML = `<table border=1>${favMovieLocal}
		</table>`;
		favMoiveList = favMovieListInJson;
		return favMoiveList;
		// return favMovieListInJson;
	})
	.catch(()=>{
	});
}
function addFavourite(selectedId) {
	let findSelectedMovie;
	favMoiveList.forEach(element => {
		if(element.id == selectedId)
		{
			alert('Movie is already added to favourites.');
			throw Error('Movie is already added to favourites');
		}
	});
	allMovieList.forEach(element => {
		if(element.id == selectedId)
		{
			findSelectedMovie = element;
		}
	});
	return fetch('http://localhost:3000/favourites', {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify(findSelectedMovie)
	})
	.then(()=>{
		let addFavMovieLocal = '';
		favMoiveList.push(findSelectedMovie);
		favMoiveList.forEach(adFavMovElement=>{
			addFavMovieLocal = addFavMovieLocal + `<tr><td>${adFavMovElement.title}</td><td>
			<img src="${adFavMovElement.posterPath}" alt=""></td></tr>`;
		});
		document.getElementById('favouritesList').innerHTML = `<table border=1>${addFavMovieLocal}
		</table>`;
		return favMoiveList;
		// return response;
	})
	.catch((error)=>{
	return error;
	});
}
module.exports = {
	getMovies,
	getFavourites,
	addFavourite
};

// You will get error - Uncaught ReferenceError: module is not defined
// while running this script on browser which you shall ignore
// as this is required for testing purposes and shall not hinder
// it's normal execution
