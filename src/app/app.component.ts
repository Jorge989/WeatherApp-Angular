import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}
  weatherData?: WeatherData;
  cityName: string = 'São Paulo';
  cityNameHtml: string = '';
  ngOnInit(): void {
    this.getWeatherDtata(this.cityName);
    console.log('aqui', this.cityName);
    this.cityNameHtml = this.cityName;
    this.cityName = '';
  }
  onSubmit() {
    console.log('aqui', this.cityName);
    this.getWeatherDtata(this.cityName);
    this.cityNameHtml = this.cityName;
    this.cityName = '';
  }

  private getWeatherDtata(cityName: string) {
    this.weatherService.getWeatherData(cityName).subscribe({
      next: (response) => {
        this.weatherData = response;
      },
    });
  }
}
