import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  githubUsername!: string;
  githubsearchForm!: FormGroup;
  username:any; 
  user: any;
  userRepositories: any;
  getUser() {
    // console.log(this.githubsearchForm.value)
    this.githubUsername = this.githubsearchForm.value.githubUsername

    this.dataservice.updateusername(this.username)
    // navigate to our user details page and our username on the route
    this.userdetailsroute.navigate([`user/${this.githubUsername}`])
  }
  // Dependency Injection for our router
  constructor(private userdetailsroute:Router, private dataservice:DataserviceService) { }
  ngOnInit(): void {
    // on Initialization ......we also validate our form input
    this.githubsearchForm = new FormGroup({
      githubUsername: new FormControl(
        null,
        [Validators.required]
      )
    })

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


