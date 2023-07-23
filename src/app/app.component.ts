import { WeatherService } from './weather.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  weatherData: any = JSON;
  title = 'weather-app';
  latitude: number = 40.7128; // Replace with your desired latitude
  longitude: number = -74.0060; 
  constructor(private weatherService:WeatherService){}

    getWeatherData(){
      this.weatherService.getweatherData(this.latitude,this.longitude).subscribe((data:any)=>{
        this.weatherData = data;
        console.log(this.weatherData);
      },
      (error) => {
        console.error('Error fetching weather data:', error);
      });
    }
}
