import { Injectable } from '@angular/core';
import { Users } from './users';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
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
    let headers = new HttpHeaders({ 'Authorization': 'token ' + environment.apiKey });
    let searchRequest = environment. GITHUB_API_URL + this.searchuser;
    let options = { headers: headers };
    return this.http.get<UserInterface>(searchRequest, options);
  }
  getUserRepos(): Observable<RepoInterface> {
    let headers = new HttpHeaders({ 'Authorization': 'token ' + environment.apiKey });
    let searchRequest = environment.GITHUB_API_URL + this.searchuser + "/repos";
    let options = { headers: headers };
    return this.http.get<RepoInterface>(searchRequest, options);
    
  }

  searchGithubRepo(): Observable<RepoInterface> {
    return this.http.get<RepoInterface>(this.REPO_URL + this.searchRepo + "");
  }

  updateName(userName: string) {
    this.searchuser = userName;
  }

  updateRepo(repoName: string) {
    this.searchRepo = repoName;
  }

   
}

