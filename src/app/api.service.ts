import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Loactions } from './loactions';

import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  private url = 'http://localhost:3000/locations';
  constructor(private http: Http) { }

  getLocations(): Observable<Loactions[]> {
    return this.http.get(this.url).map(res => res.json());
  }
}
