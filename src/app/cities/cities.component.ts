import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {cities$, ICity} from '../app.mocks';

@Component({
    selector: 'app-cities',
    templateUrl: './cities.component.html',
    styleUrls: ['./cities.component.css']
})
export class CitiesComponent {

    @Input()
    public cities: ICity[];

    @Input()
    public currentCity: ICity;

    @Output()
    public changeCity: EventEmitter<ICity> = new EventEmitter<ICity>();

    constructor() { }

    public setCurrentCity(city: ICity) {
        this.currentCity = city;
        this.changeCity.emit(city);
    }
}
