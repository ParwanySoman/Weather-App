const key = "21174c6013efcdebbbf876d2fc562a8d";
let input = document.getElementById('inputCity');

input.addEventListener("keypress", function (e) {
    if (e.keyCode == 13 || e.which == 13) {
        getWeather();
    }
});


async function getWeather() {
   let city = input.value;
   let api = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&mode=json&APPID=${key}`; // hier werd JSON opgeroepen
   let response = await axios.get(api); // en hier verkrijg je JSONdata 

console.log(response.data.list)
}