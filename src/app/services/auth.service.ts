import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {
  constructor() {
    firebase.initializeApp(environment.firebase);
  }

  anonymousAuth() {
    firebase.auth().signInAnonymously().then(result => {
      console.log('Anonymous session success');
    })
    .catch(err => {
      console.log(err.message);
    });
  }
}
