import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {User} from '../Classes/user'
import { Repository } from '../Classes/repository';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  myKey:string = environment.apiKey;
  apiUrl = "https://api.github.com/users/"
//  Dependency Injection
  constructor(private http:HttpClient) {} 

  getGithubUserData(githubUsername:string) {
    this.http.get(this.apiUrl + githubUsername)
  //   return this.http
  //   .get<User>(
  //     `https://api.github.com/users/?per_page =10`
  //   )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
  //   .toPromise ();
  // }

  // getUserRepositoryData(githubUsername:string){
  //   return this.http
  //   .get<Repository[]>(
  //  ${githubUsername}   ``
  //   )


  // }
}
