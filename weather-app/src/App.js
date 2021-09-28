import Draggable from 'react-draggable';
import React, { useState } from 'react';
import './App.css';



const api = {
  key: "71e9302dfe6d567b22917c7fe9e78c51",
  baseUrl: "https://api.openweathermap.org/data/2.5/"
};

function App() {

  const [ query, setQuery ]= useState('');
  const [ weather, setWeather ]= useState({});

  const search = (event) =>{
    if(event.key === "Enter"){
      fetch(`${api.baseUrl}weather?q=${query}&units=metric&appid=${api.key}`)
      .then(response =>response.json())
      .then((result) => {
        setWeather(result);
        setQuery('');
        // console.log(result);
      });
    }
  };

  const dateBuilder = (d) =>{
    let months = ["January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "Octomber", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    

    return `${day} ${date} ${month} ${year}`;
  };

    //console.log(time);

  /*const dynamicWeatherBackground = () =>{
    if((typeof weather.main != "undefined")){
      if(weather.main.temp > 16){
        return 'app warm';
      }else{
        return 'app';
      }
    }else{
      return 'app';
    }

    (typeof weather.main != "undefined") ? 
    ((weather.main.temp > 16) ? 'app warm' : 'app') 
    : 'app'
  };*/

  return (
    <div className='app'>
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..." onChange={(event) => {setQuery(event.target.value)}} value={query} onKeyPress={search} />
        </div>
        <Draggable>
        {(typeof weather.main != "undefined") ? (
          <div>
              <div className="location-box">
                <div className="location">
                  { weather.name }, { weather.sys.country }
                </div>
                <div className="date">
                        { dateBuilder(new Date()) }
                </div>
              </div>
            <div className="weather-box">
                <div className="temperature">
                      { Math.round(weather.main.temp) }°c
                </div>
                <div className="weather">
                      { weather.weather[0].main }
                </div>
            </div>
          </div>
        ) : (<div className="weather-box">
              <div className="default">
                <p>Welcome,</p> 
                <p>Please enter the name of place to look for.</p>
              </div>
            </div>)}
            </Draggable>
      </main>
    </div>
  );
}

export default App;
