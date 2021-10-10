import './App.css';

const OPEN_WEATHER_API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY
const city_name = 'Worcester'

const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${OPEN_WEATHER_API_KEY}`


const getWeather=() => {
  //  fetch(    api_url )
  //   .then(res => console.log(res))
  fetch(api_url)
    .then(response => response.json())
    .then(data => console.log(data.weather[0].description));

}


function App() {
  return (
    <div className="App">
     <button onClick={getWeather}>
     getWeather
    </button>
    </div>
  );
}

export default App;
