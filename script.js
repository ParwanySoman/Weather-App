const Key = "21174c6013efcdebbbf876d2fc562a8d";
let input = document.getElementById('inputCity');
let button = document.getElementById('button');

input.addEventListener('keypress', getValueOfInput);

function getValueOfInput(e) {
	console.log(e.target.value);
}

async function getWeather() {
    let city = input.value;
    let api = `http://api.openweathermap.org/data/2.5/weather?q=London&appid=21174c6013efcdebbbf876d2fc562a8d&units=metric`;
    let response = await axios.get(api);
 
}


 getWeather();

//function getWeather() {
//	{
///		let city = input.value;
	//:	let api = `http://api.openweathermap.org/data/2.5/weather?q=London&appid=21174c6013efcdebbbf876d2fc562a8d&units=metric`;
		
	//	button.addEventListener('click', async function(e) {
	//		e.preventDefault();
	//		let response = await axios.get(api).catch(err => {
//console.log(response.data.list)
//		})
//		})
	
//}
//}