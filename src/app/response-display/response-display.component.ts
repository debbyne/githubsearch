import { Component, OnInit } from '@angular/core';
import { GithubserviceService } from '../services/githubservice.service';
import { User } from '../user';

@Component({
  selector: 'app-response-display',
  templateUrl: './response-display.component.html',
  styleUrls: ['./response-display.component.css']
})
export class ResponseDisplayComponent implements OnInit {
  user?: User;

  constructor(private gitService: GithubserviceService) { 
    //repo
  }
  findThisUser(whatToSearch: any) {
    this.gitService.findUser(whatToSearch).then((success) => {
      this.user = this.gitService.user
    })
    // this.gitService.showRepositories(whatToSearch).then((success) => {
    //   this.repository = this.gitService.repository;
    // },
    //   (error) => {
    //     console.log(error)
    //   }
    // )
  }

  ngOnInit(): void {
    this.findThisUser('debbyne')
  }

}
