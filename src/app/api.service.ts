import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Http } from '@angular/http';
import { Record } from './record';
import { Observable } from 'rxjs';
import { map, filter, switchMap, catchError } from 'rxjs/operators';

const URL=environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: Http) { }

  public getAllRecords():  Observable<Record[]>{
      return this.http
        .get(URL + '/records')
        .pipe(
        map(response => {
          const records = response.json();
          return records.map((record) => new Record (record));
        }))
  }

  public addRecord(record: Record): Observable<Record>{
    return this.http
    .post(URL + '/records', record)
    .pipe(
     map(response => {
      return new Record(response.json());
    }))
  }

}
