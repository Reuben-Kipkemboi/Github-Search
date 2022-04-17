import { Component, OnInit } from '@angular/core';
//########Making use of routers.......'''''''''
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/Services/dataservice.service';
import { User } from 'src/app/Classes/user';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  username: any;
  GithubUserData!: User;
  userRepositories: any;
  searchingName: string = "";
  personalData: any;
  searchingname: any;
  user: any;

  // Dependency Injection for our router
  constructor(private userdetailsroute: Router, private dataservice: DataserviceService) { }

  ngOnInit(): void {}
    getGithubUserData(){
      this.dataservice.getGithubUserData().subscribe(
        data => {
          this.user = data
          this.userdetailsroute.navigate(['/detailsComponent']);
          console.log( this.user)
        }
      )
      // My repositories
      // this.dataservice.getGithubUserRepoData().subscribe(
      //   data => {
      //     this.userRepositories = data
      //     // console.log(this.userRepositories)
      //   }
      // )
    }
  }




