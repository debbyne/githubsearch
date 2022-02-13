import { User } from './../user';
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubserviceService {
  user!:User

  constructor(private http:HttpClient) {
    this.user = new User('')
   }

     // handle a user name input
  findUser(whatToSearch:any){
    interface GithubAPI{
      login:string,
    
    }
    let headers = new HttpHeaders({'Authorization':'token' + environment.api_key})
    let request = environment.baseUrl + whatToSearch ;
    let params={headers:headers}
    let promise = new Promise((resolve, reject) => {
      this.http.get<GithubAPI>(request,params).toPromise().then((response: any) => { this.user = response;
            
            resolve(resolve);
            console.log(this.user)
          },
          (error:any) => {
            reject();
            console.log(error)
          }
        );
    });
    return promise;
  }


}
