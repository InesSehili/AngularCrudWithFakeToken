import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {filter, find} from "rxjs";
import {FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Injectable({
  providedIn : 'root'
})
export class AuthServiceService {
  constructor(private http : HttpClient, private route : Router) {
  }
  private token! :string;
   login() {
     this.token = "my token !";

   }
  getListUser() {
    return this.http.get<any []>(`${environment.apiUrl}/signupUsers`);
  }
   getToken() {
     return this.token;
   }
}
