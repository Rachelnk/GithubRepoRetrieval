import { Injectable } from '@angular/core';
import { Users } from './users';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Repos } from './repos';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  foundUser!: Users;
  allRepos!: Repos;

  constructor(private http: HttpClient) {
    this.foundUser = new Users("","","","",0,0,0,"",new Date);
    this.allRepos = new Repos("","","",new Date,0,0,"");

   }
   searchUser (searchName: string){

   }
}
