import { Injectable } from '@angular/core';
import { Users } from './users';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Repos } from './repos';
import { UserInterface } from './interface/user';
import { RepoInterface } from './interface/repo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  searchuser = `rachelnk`
  ExistingRepos: any;
  searchRepo = "gitsearch"
  REPO_URL = `https://api.github.com/search/repositories?q=`

  constructor(private http: HttpClient) {
    // this.foundUser = new Users("","","","",0,0,0,"",new Date);
    // this.allRepos = new Repos("","","",new Date,0,0,"");

   }
   githubUser(): Observable<UserInterface> {
    let headers = new HttpHeaders({ 'Authorization': 'token ' + environment.Api_Key });
    let searchRequest = environment.GITHUB_API_URL + this.searchuser;
    let options = { headers: headers };
    return this.http.get<UserInterface>(searchRequest, options);
    // return this.http.get<UserInterface>(this.GITHUB_API_URL + this.searchuser + `?access_token=`+this.Git_token);
    // this.search.id;
    // this.search.followers;
  }
   searchUser (searchName: string){
    
    return new Promise<void>((resolve, reject) => {
      this.http.get<Response>('https://api.github.com/users/'+searchName+'?access_token='+environment.apiKey).toPromise().then(
        (result) => {
          this.foundUser = result;
          console.log(this.foundUser);
          resolve();
        },
        (error) => {
          console.log(error);
          reject();
        }
      );
    });

   }
   getRepos (searchName: any){
    interface Repos{
      
     
   }
   return new Promise<void>((resolve,reject)=>{
    this.http.get<Repos>('https://api.github.com/users/'+searchName+"/repos?order=created&sort=asc?access_token="+environment.apiKey).toPromise().then(
      (results) => {
        this.allRepos = results;
        resolve();
      },
      (error) => {
        console.log(error);
        reject();
      }
    );
  });
}
}
