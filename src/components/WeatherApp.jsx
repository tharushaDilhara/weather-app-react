import React, { useEffect, useState } from 'react'
import './index.css'
import rain from '../assets/rain.png'
import clouds from '../assets/clouds.png'
import clear from '../assets/clear.png'
import drizzle from '../assets/drizzle.png'
import humidity from '../assets/humidity.png'
import mist from '../assets/mist.png'
import search from '../assets/search.png'
import snow from '../assets/snow.png'
import wind from '../assets/wind.png'

const WeatherApp = () => {
    const[temp,setTemp] = useState("");
    const[city,setCity] =useState("");
    const[newCity,setNewCity] = useState("");
    const[windsp,setWindsp] = useState("");
    const[description,setDescription] = useState("");
    const[humidityp,setHumidityp] = useState("");
    const[cloudsp,setCloudsp] = useState("");


        const apiKey = "566b9435ae38feb9d802908e2ab6257e";
        const api = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        
        const fetchWeather = async () =>{
            try {
                const response = await fetch(api+ city +`&appid=${apiKey}`);
                const weatherD = await response.json();

                const{clouds,main,wind,weather} = weatherD;

                console.log(weatherD);

                setNewCity(weatherD.name);
                setTemp(main.temp);
                setWindsp(wind.speed);
                setHumidityp(main.humidity);
                setDescription(weather[0].description);
                setCloudsp(clouds.all);
                setCity("");
            } catch (error) {
                console.log(error);
                alert("insert data")
                return 0;
                
            }
            
        }
  return (
    <div className='app'>
        <div className="conatiner">
            <div className="header">
                <h1>Weather App</h1>
            </div>
            <div className="display-Container">
                <div className="input-field">
                    <input type="text" onChange={(e)=>setCity(e.target.value)} value={city}/>
                    <img src={search}  onClick={()=>{fetchWeather()}}/>
                </div>
                <div className="info">
                    <div className="temp">
                        <img src={rain} alt="" />
                        <h2>{temp}°c</h2>
                        <h3>{newCity}</h3>
                        <p>{description}</p>
                    </div>
                    <hr />
                    <div className="wind-humidity-cloudy">
                        <div className="wind">
                            <img src={wind} alt="" />
                            <h2>{windsp}km/h</h2>
                        
                        </div>
                        <div className="humidity">
                            <img src={humidity} alt="" />
                            <h2>{humidityp}%</h2>
                        </div>
                        <div className="cloudy">
                            <img src={clouds} alt="" />
                            <h2>{cloudsp}%</h2>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WeatherApp
