import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserreposService {
  username = "rachelnk"

  constructor(private reposhttp: HttpClient) {

   }

  myRepos(username:string):any{
    const prom = new Promise ((resolve, reject)=>{
      resolve(this.reposhttp.get(`https://api.github.com/users/${username}/repos`).toPromise());
    })

  }
}
