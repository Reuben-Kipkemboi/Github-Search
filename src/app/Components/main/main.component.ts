import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
//########Making use of routers.......'''''''''
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  githubUsername!: string;
  githubsearchForm!: FormGroup; 
  getUser() {
    // console.log(this.githubsearchForm.value)
    this.githubUsername = this.githubsearchForm.value.githubUsername

    // navigate to our user details page and our username on the route
    this.userdetailsroute.navigate([`user/${this.githubUsername}`])
  }
  // Dependency Injection for our router
  constructor(private userdetailsroute:Router) { }
  ngOnInit(): void {
    // on Initialization ......we also validate our form input
    this.githubsearchForm = new FormGroup({
      githubUsername: new FormControl(
        null,
        [Validators.required]
      )
    })
  }
}


