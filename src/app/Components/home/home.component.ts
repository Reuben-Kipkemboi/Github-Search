import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/Services/dataservice.service';
import { User } from 'src/app/Classes/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user!: any; 
  userRepositories!: any
  constructor(private dataservice:DataserviceService) { }

  ngOnInit(): void {
    this.dataservice.getGithubUserData().subscribe(
      data => {
        this.user = data
      // console.log( this.user)
  }
    )

    // My repositories
    this.dataservice.getGithubUserRepoData().subscribe(
      data => {
        this.userRepositories = data
      console.log( this.userRepositories)
  }
    )
}
}
