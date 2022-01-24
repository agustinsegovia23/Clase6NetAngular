import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherForecast, WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  keyword: string = '';
  public forecasts: WeatherForecast[] = [];

//---- Constructor
  constructor(private weatherService: WeatherService) {
    this.refresh();
  }

//---- Metodo Refresh
  refresh(){
    this.weatherService.getWeather(this.keyword).subscribe(result =>{
      this.forecasts = result;
    }, error => console.error(error));
  }

}


