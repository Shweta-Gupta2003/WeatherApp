import react,{useState} from 'react'
import axios from 'axios'

function App() {
  const[data,setData]=useState({})
  const[location,setLocation]=useState('')

  const searchLocation= (event) => {
    const fetchApi=async()=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=04d90ab75505fe5816f609ea7a14474e`
        const response=await fetch(url);
        const resj=await response.json();
        setData(resj);
        console.log(resj);
    } ;
    fetchApi();
  }
  return (
       <div className="app">
        <div className="search">
          <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Please enter Location'
          type="text"/>
        </div>
        <div className="container">
          <div className="top">

            <div className="location">
              <p>{data.name}</p>
            </div>

            <div className="temp">
              {data.main?<h1>{data.main.temp}°F</h1> :null}
            </div>

            <div className="description">
              {data.weather ?<p>{data.weather[0].main}</p>:null}
            </div>
          </div>

            <div className="bottom">
              <div className="feels">
                {data.main? <p className='bold'>{data.main.feels_like}°F</p>:null}
                <p>Feels Like</p>
              </div>

              <div className="humidity">
               {data.main? <p className='bold'>{data.main.humidity}%</p>:null}
                <p>Humidity</p>
              </div>

              <div className="wind">
               {data.main? <p className='bold'>{data.wind.speed}MPH</p>:null}
                <p>Wind Speed</p>
              </div>
         </div>
        </div>
     </div>

  );
}

export default App;
