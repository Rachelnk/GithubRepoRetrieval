import { Component, OnInit } from '@angular/core';
import {UserserviceService} from '../userservice.service';
import { Repos } from '../repos';
import { RepoInterface } from '../interface/repo';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  reponame: any; 
  ExistingRepos: any;

  constructor(public userService: UserserviceService) { 
    this.userService = userService
    console.log(this.reponame);
  }
  searchGithubRepo() {
    this.userService.updateRepo(this.reponame);
    // this.myService.getUserRepos().subscribe(repository => {
      // this.githubrepos = repository
      // console.log(this.githubrepos);
    this.userService.searchGithubRepo().subscribe(
      data => { this.ExistingRepos = data;
      }
    )
  }
  

  ngOnInit(): void {
    this.userService.searchGithubRepo().subscribe(
      data => {
        this.ExistingRepos = data;
        // data['items']
        console.log(this.ExistingRepos);
      }
    )
  }
  

}
