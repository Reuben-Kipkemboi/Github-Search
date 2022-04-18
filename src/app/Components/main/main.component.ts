import { Component, OnInit } from '@angular/core';
//########Making use of routers.......'''''''''
import { Router } from '@angular/router';
import { DataserviceService } from 'src/app/Services/dataservice.service';
import { User } from 'src/app/Classes/user';
import { NgForm } from '@angular/forms';

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
  user: User = new User("", "", "", "",0,0, 0,"","", "", 0,0);

  // Dependency Injection for our router
  constructor(private userdetailsroute: Router, private dataservice: DataserviceService) { }

getUser(githubsearchform:NgForm){
    let searchingName = githubsearchform.value.searchingName;
    let submitted = false;
    this.dataservice.getUserData(searchingName).subscribe(data =>
      {
    this.user.login = data.login;  
    this.user.avatar_url = data.avatar_url;
    this.user.bio  = data.bio;
    this.user.company = data.company;
    this.user.created_at= data.created_at;
    this.user.followers = data.followers
    this.user.following = data.following;
    this.user.html_url = data.html_url;
    this.user.location = data.location
    this.user.twitter_username = data.twitter_username;
    this.user.updated_at = data.updated_at;
    this.user.public_repos = data.public_repos;

    console.log(this.user);
      })
    
    }

  ngOnInit(): void {}
    
  }
  




