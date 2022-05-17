import { Injectable } from '@angular/core';
import { Users } from './users';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Repos } from './repos';
import { UserInterface } from './interface/user';
import { RepoInterface } from './interface/repo';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  searchuser = `rachelnk`
  ExistingRepos: any;
  searchRepo = "gitsearch"

  constructor(private http: HttpClient) {
    // this.foundUser = new Users("","","","",0,0,0,"",new Date);
    // this.allRepos = new Repos("","","",new Date,0,0,"");

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
