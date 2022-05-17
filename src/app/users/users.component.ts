import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Users } from '../users';
import { Repos } from '../repos';
import { UserInterface } from '../interface/user';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  username!: string;
  gitprofile!: Users;
  repo: any;

  constructor(private myService: UserserviceService) { 
    this.username = `${this.myService.searchuser}`
    console.log(this.username);
  }
  searchGithub() {
    this.myService.updateName(this.username);
    this.myService.githubUser().subscribe(
      user => { this.gitprofile = user }
    )
    // this.gitprofile = <any>this.userService.searchuser
    // alert(this.gitprofile);

    this.myService.getUserRepos().subscribe(repository => {
      this.repo = repository
      console.log(this.repo);

    })
  }

  

  ngOnInit(): void {
    this.myService.githubUser().subscribe(
      data => {
        this.gitprofile = data
        console.log(this.gitprofile);

      }
    )
    this.myService.getUserRepos().subscribe(repository => {
      this.repo = repository
    })

  
  }

}
