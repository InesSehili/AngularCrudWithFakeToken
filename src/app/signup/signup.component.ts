import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
 signupForm! : FormGroup;
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private route : Router) { }

  ngOnInit(): void {
    this.initFormSignup();
  }
 initFormSignup(){
    this.signupForm = this.formBuilder.group(
      {
        fullName: ['', Validators.required],
        phoneNumber: ['',[Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10), Validators.pattern("^[0-9]*$")]],
        email: ['',[Validators.required, Validators.email]],
        password: ['', [Validators.required]]


      }
    );
 }

  signUp() {
    this.http.post<any>(`${environment.apiUrl}/signupUsers`,this.signupForm.value).subscribe(
      res =>{
        console.log(res);
        this.signupForm.reset();
        this.route.navigate(['login']);

      },
      err =>{
        console.log("Errooor")

    }
    );

  }
  getFormCtrlErrorText(ctrl : AbstractControl)
  {
    if(ctrl.hasError('required'))
      return 'Ce champs est requis';
    else if(ctrl.hasError('email'))
      return 'Merci d\'entrer une adresse email Valide';
    else if(ctrl.hasError('minlength'))
      return 'min 10';
    else if(ctrl.hasError('maxlength'))
      return 'Max 10';
    else
      return 'Ce champs contient une erreur';
  }

}
