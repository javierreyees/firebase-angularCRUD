import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { CarService } from './services/car.service';

class Car {
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  cars: Car[] = [];

  constructor(private _auth: AuthService, private _carSer: CarService) {
    _auth.anonymousAuth();
    _carSer.getCars().then(val => {
      val.forEach(innerVal => this.cars.push(innerVal) );
    });
  }

}
