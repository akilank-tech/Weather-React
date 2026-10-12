import { useState } from "react";
import axios from "axios";
const Weather = () => {
    const [city, setCity] = useState("")
    const [weather, setWeather] = useState("")
    const [temp, setTemp] = useState("")
    const [desc, setDesc] = useState("")

    const handleCity = (evt) => {
        setCity(evt.target.value)
    }
    const handleWeather = () => {
        var weatherdata = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0efe0b956e513b1217ad609add553e0e`)

        weatherdata.then((success) => {
            console.log(success.data)
            setWeather(success.data.weather[0].main)
            setDesc(success.data.weather[0].description)
            setTemp(success.data.main.temp)
        })
    }
    return (
        <div className="bg-[green] p-4 sm:p-15 min-h-dvh rounded-md flex items-center justify-center sm:block">
            <div className="bg-[lightgreen] py-6 px-4 rounded-md shadow-lg sm:p-10">
            <div className="bg-[lightgreen] text-[green] p-5 rounded-md shadow-lg sm:p-10">
                <h1 className="text-2xl font-semibold sm:text-3xl">Weather Report ⛅</h1>
                <p className="text-[10px] mt-2 sm:text-base">I can give you a weather report about your city!</p>
                <input value={city} onChange={handleCity} className="bg-white  border-[green] border-2 focus:outline-none outline-[green] rounded-md mt-2 p-1 text-xs sm:text-base sm:p-2 sm:mt-3" type="text" placeholder="Enter your City Name" /><br />
                <button onClick={handleWeather} className="bg-[green] border-0 cursor-pointer text-white mt-2 text-xs p-2 rounded-md sm:text-base sm:mt-3 sm:p-3">Get Report</button>
                <div className="mt-3">
                    <h1 className="text-xs sm:text-2xl mt-3"><b>Weather : </b>{weather}</h1>
                    <h1 className="text-xs sm:text-2xl mt-3"><b>Temperature : </b>{temp}</h1>
                    <h1 className="text-xs sm:text-2xl mt-3"><b>Description : </b>{desc}</h1>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Weather;