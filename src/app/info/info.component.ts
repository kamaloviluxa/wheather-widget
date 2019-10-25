import {Component, Input, OnInit} from '@angular/core';
import {ICity} from '../app.mocks';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

    @Input()
    public city: ICity;

    constructor() { }

    ngOnInit() {
    }

}
