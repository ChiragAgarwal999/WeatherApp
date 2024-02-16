import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp(){
    const [weatherInfo,setWeatherinfo] = useState( {
        city:"Delhi",
        feelsLike:12.55,
        humidity:58,
        temp:13.62,
        tempMax:13.62,
        tempMin:13.62,
        weather:"haze",
    });

    let updateInfo = (newInfo) => {
        setWeatherinfo(newInfo);
    }

    return (
        <div style={{textAlign:"center"}}>
            <h2>Weather App by Chirag</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}