import { Component, OnInit } from '@angular/core'
import { DataserviceService } from 'src/app/Services/dataservice.service';
import { User } from 'src/app/Classes/user';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  
  constructor( private dataservice:DataserviceService) { }
  ngOnInit(): void {
   
  }
  
}

  

