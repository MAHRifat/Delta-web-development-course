import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import './Search.css';
export default function Search(){
    let [city, setCity] = useState("");
    let [weather, setWeather] = useState({
        feels_like: "",
        grnd_level: "",
        humidity: "",
        pressure: "",
        sea_level: "",
        temp: "",
        temp_max: "",
        temp_min: ""
    });

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "17f959e241eb51304152aaa170bde911";

    let getWeatherInfo = async ()=> {
        let response = await fetch(`${API_URL}?q=${city}&limit=5&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        console.log(jsonResponse.main);
        setWeather(jsonResponse.main);
    }



    let onChangeCity = (e)=> {
        setCity(e.target.value);
    }

    let onSubmitCity = (e)=>{
        e.preventDefault();
        console.log(city);
        getWeatherInfo();
    }
    return(
        <div>
            <h1>Search weather by city</h1>
            <form action="" onSubmit={onSubmitCity}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={onChangeCity}/>
                <br /><br />
                <Button variant="contained" type='submit'>
                    Send
                </Button>
            </form>

            {
                <div className='weather'>
                    <h1>Weather in {city}</h1>
                <p>Feels like: {weather.feels_like}&deg; C</p>
                <p>Grnd level: {weather.grnd_level}</p>
                <p>Humidity: {weather.humidity}</p>
                <p>Pressure: {weather.pressure}</p>
                <p>Sea level: {weather.sea_level}</p>
                <p>Temperature: {weather.temp}&deg; C</p>
                <p>Max Temp.: {weather.temp_max}&deg; C</p>
                <p>Min Temp.: {weather.temp_min}&deg; C</p>
                </div>
            }
        </div>
    )
}