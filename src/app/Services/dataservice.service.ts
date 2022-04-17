import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../Classes/user'
import { Repository } from '../Classes/repository';
import { HttpClient } from '@angular/common/http';
import {observable, Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  
  username= "Reuben-Kipkemboi";
  MYKEY: string = environment.apiKey;
  USERAPIURL = `https://api.github.com/users/${this.username}`
  USERREPOURL = `https://api.github.com/users/${this.username}/repos`
  //  Dependency Injection
  constructor(private http: HttpClient) { 
    console.log('our service is doing quite well...')
  }

  getGithubUserData():Observable<any> {
    return this.http.get<any>(this.USERAPIURL)
   

  }
  getGithubUserRepoData():Observable<any> {
    return this.http.get<any>(this.USERREPOURL)
    

  }
  getUserData(username:string){
    return this.http.get<User>(
      `https://api.github.com/users/${username}`)
  }

  getUserRepos(githubUsername:string){
    return this.http.get<Repository>(
      `https://api.github.com/users/${this.username}/repos?order=created&sort=desc?access_token=${this.MYKEY}`)
      


  }
  updateusername(username:string){
    this.username = username;

  }
  
}
