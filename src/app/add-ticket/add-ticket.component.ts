import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Record } from '../record';
import { RecordDataService } from '../record-data.service';
@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent implements OnInit {

  constructor(private router: Router,private recordDataService: RecordDataService) { }

  record : Record;
  temp: string;

  ngOnInit() {
  }
  addTicket(description: string,remark: string,id: number){
    this.record={ "description": description,"remark": remark,"id": id};
    this.recordDataService.addRecord(this.record).subscribe();
  } 
}
  