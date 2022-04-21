import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Users } from '../users';
import { Repos } from '../repos';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user!: Users;
  repo!: Repos;

  constructor(public myService: UserserviceService, private repoService: UserserviceService) { }
  search(searchName:any) {
    this.myService.searchUser(searchName).then(
      (success: any)=>{
        this.user = this.myService.foundUser;
      },
      (error: any)=>{
        console.log(error)
      }
    );
      this.repoService.getRepos(searchName).then(
        (results: any)=>{
          this.repo =this.repoService.allRepos
          console.log(this.repo);
        },
        (error: any)=>{
          console.log(error);
        }
      );

  }

  ngOnInit(): void {
  }

}
