import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private API_KEY = '4784233ab3896689d19cdba33943da69';
  private API_URl = 'http://api.weatherapi.com/v1/current.json?key=e321ff988a1849e89ca71523232307&q=London&aqi=no';

  constructor(private http : HttpClient) { }
  getweatherData(latitude: number, longitude: number){
    const url = `${this.API_URl}`;
    return this.http.get(this.API_URl);
  }
}
