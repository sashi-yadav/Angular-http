import { Injectable } from '@angular/core';
import { Record } from './record';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecordDataService {

  constructor(private api: ApiService) { }

  getAllRecord(): Observable<Record[]>{
    return this.api.getAllRecords();
  }

  addRecord(record: Record): Observable<Record>{
    return this.api.addRecord(record);
  }
}
