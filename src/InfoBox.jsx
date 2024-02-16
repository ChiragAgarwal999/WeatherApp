import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
export default function InfoBox({info}){
    return (
        <div className="InfoBox">
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={`https://source.unsplash.com/345x140/?${info.weather}+weather`}
                    title="green iguana"/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component={"span"}>
                    {info.city} {info.humidity > 80 ?<ThunderstormIcon/> : info.temp > 15 ?<WbSunnyIcon/> : <AcUnitIcon/>}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component={"span"}>
                        <p>Temperature = {info.temp}&deg;C </p>
                        <p>Humidity = {info.humidity} </p>
                        <p>Min Temp = {info.tempMin}&deg;C </p>
                        <p>Max Temp = {info.tempMax}&deg;C </p>
                        <p>The weather can be described as <i>{info.weather}</i> feels like {info.feelsLike}&deg;C </p>
                    </Typography>
                </CardContent>
            </Card>
            </div>
        </div>
    )
}