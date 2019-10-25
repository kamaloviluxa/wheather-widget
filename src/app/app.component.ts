import {Component, OnInit} from '@angular/core';
import {cities$, ICity} from './app.mocks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    public cities: ICity[];

    public currentCity: ICity;

    ngOnInit(): void {
        cities$.subscribe((cities) => {
            this.cities = cities;
            this.currentCity = cities[0];
        });
    }

    public setCurrentCity(city: ICity) {
        this.currentCity = city;
    }

}
