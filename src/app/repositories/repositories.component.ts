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

  constructor(private userService: UserserviceService) { 
    this.userService = userService
    console.log(this.reponame);
  }
  searchGithubRepo() {
    this.userService.updateRepo(this.reponame);
    this.userService.searchGithubRepo().subscribe(
      data => { this.ExistingRepos = data['items'];
      }
    )
  }
  

  ngOnInit(): void {
    this.userService.searchGithubRepo().subscribe(
      data => {
        this.ExistingRepos = data['items'];
        // data['items']
        console.log(this.ExistingRepos);
      }
    )
  }
  

}
