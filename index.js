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
	.then(response => console.log(response))
	.catch(err => console.error(err));

//fetch for pulling actor most known for project - again will need ${} to tie back to above fetch/user submit and populated actors so "nm#######" shows image/title for 
fetch('https://online-movie-database.p.rapidapi.com/actors/get-known-for?nconst=nm0836432', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

	