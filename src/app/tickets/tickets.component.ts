import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Record } from '../record';
import { RecordDataService } from '../record-data.service';


@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {


records: Record[]=[];

  constructor(private router: Router , private recordDataService: RecordDataService) { }


  ngOnInit() {
    this.recordDataService.getAllRecord()
    .subscribe(
      (records) => {
        this.records= records;
      }
      )
  }
  add(){
    this.router.navigate(['./addTicket']);
  }
}
