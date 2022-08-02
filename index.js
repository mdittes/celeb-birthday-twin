const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2639bdd3f8msh2ab08522d2d1474p1c29d8jsn5eb27c426af6',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};

//fetch for pulling birthdays on that day - will need ${} to obtain new dates on page load (current date) and after user form submit
fetch('https://online-movie-database.p.rapidapi.com/actors/list-born-today?month=12&day=21', options)
	.then(response => response.json())
	.then(actors => renderBirthdays(actors))
	.catch(err => console.error(err));

//fetch for pulling actor most known for project - again will need ${} to tie back to above fetch/user submit and populated actors so "nm#######" shows image/title for 
fetch('https://online-movie-database.p.rapidapi.com/actors/get-known-for?nconst=nm0836432', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

//need to adjust return of first fetch so that it only returns/populates the top 4 results	
	//return will be the actor's name/imdb profile - will need to populate with both image associated with that account and name underneath (two separate blocks)

const birthdayContainers = document.querySelector('#birthday-cards')
	
const renderBirthdays = function(actor) {
	 actor.slice(0,4).forEach(actor => {
		console.log(actor)
	})
}
// need actor.slice(0,4) to only iterate over first 4 elements returned in fetch