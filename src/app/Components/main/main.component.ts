import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  }
  constructor() { }
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


