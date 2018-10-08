import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

import { environment } from '../../environments/environment';

@Injectable()
export class CarService {

  private database;
  private cars: Promise<any>;

  constructor() {
    this.cars = firebase.database().ref('/cars').once('value').then(snapshot => snapshot.val() );
    // this.cars = new Promise(resolve => setTimeout(resolve, 1500, ['hola', 'mundo']) );
  }

  getCars(): Promise<any> {
    return this.cars;
  }
}
