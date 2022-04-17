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
  user:any;
  username= "Reuben-Kipkemboi"; 
  // username : string; 
  MYKEY: string = environment.apiKey;
  USERAPIURL = `https://api.github.com/users/${this.username}`
  //  Dependency Injection
  constructor(private http: HttpClient) { 
    // this.username= "Reuben-Kipkemboi"; 
    console.log('our service is doing quite well...')
  }

  getGithubUserData():Observable<any> {
    return this.http.get<User>(this.USERAPIURL)
   

  }
  getGithubUserRepoData():Observable<any> {
    return this.http.get<Repository>('https://api.github.com/users/'+this.username+'/repos?acess_token='+this.MYKEY);
  }
  // getUserData(username:string){
  //   return this.http.get<User>(
  //     `https://api.github.com/users/'${this.username}'?acess_token=${this.MYKEY}`);
  // }

  // getUserRepos(username:string){
  //   return this.http.get<Repository>(
  //     `https://api.github.com/users/${this.username}/repos?order=created&sort=asc?access_token=${this.MYKEY}`)
      
  // }
  getTheRepositoryInfo(searchingName: string){
    return this.http
    .get<Repository>('https:api.github.com/search/repositories?q=${searchingName}')

  }
  updateusername(username:string){
    this.username = username;
  }
  
}
