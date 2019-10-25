import {Component, Input, OnInit} from '@angular/core';
import {IWeather} from '../app.mocks';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

    @Input()
    public weather: IWeather;

    constructor() { }

    ngOnInit() {
    }

}
