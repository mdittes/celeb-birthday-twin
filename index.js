const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'xxxxx',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};

const baseUrl = 'https://online.movie-database.p.rapidapi.com/actors/'
//const formUrl = `${baseUrl}list-born-today?month=${monthNum}&day=${dayNum}`
//const hoverUrl = `${baseUrl}get-known-for?nconst=${actorName}`
//const bdayUrl = `${baseUrl}${renderBirthdays}`

//fetch for pulling birthdays on that day - will need ${} to obtain new dates on page load (current date) and after user form submit
fetch('https://online-movie-database.p.rapidapi.com/actors/list-born-today?month=12&day=21', options)
	.then(response => response.json())
	.then(actors => renderBirthdays(actors))
	.catch(err => console.error(err));

//fetch for pulling actor most known for project - again will need ${} to tie back to above fetch/user submit and populated actors so "nm#######" shows image/title for 
fetch('https://online-movie-database.p.rapidapi.com/actors/get-known-for?nconst=nm0836432', options)
	.then(response => response.json())
	.then(data => renderCards(data))
	.catch(err => console.error(err));

//need to adjust return of first fetch so that it only returns/populates the top 4 results	
	//return will be the actor's name/imdb profile - will need to populate with both image associated with that account and name underneath (two separate blocks)

const birthdayContainers = document.querySelector('#birthday-cards')
const cardBody = document.querySelector('.card-body')
	
const renderBirthdays = function(actor) {
	 actor.slice(0,4).forEach((actor, index) => {
		//fetchBio(actor)
		console.log(actor.split())
	})
}
// need actor.slice(0,4) to only iterate over first 4 elements returned in fetch

//need fnx to grab name (and image) from the array of bdays that day from API
// const fetchBio = function(actor) {
// 	const key = actor.split('/name/')[1]
// 	return fetch(`${baseUrl}get-bio?nconst=${key}`, options)
// 	.then(res => res.json())
// 	.then(data => console.log(data))
// }

fetch('https://online-movie-database.p.rapidapi.com/actors/get-bio?nconst=nm0836432', options)
.then(res => res.json())
.then(data => console.log(data))

function renderCards(movie) {
	// const filmName = title.title
	// birthdayCards.append(filmName)
	for(const [title, image] of Object.entries(movie)) {
		console.log('hey')
	}
}