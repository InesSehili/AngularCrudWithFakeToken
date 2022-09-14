import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {environment} from "../../../../environments/environment";
import {AuthServiceService} from "../../services/auth-service.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm! : FormGroup;
  listUser! : any [];
  errorLogin = false;
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private route : Router, private authservice : AuthServiceService) { }

  ngOnInit(): void {
    this.initLoginForm();
  }
  initLoginForm(){
    this.loginForm = this.formBuilder.group(
      {
        email : ['', [Validators.required, Validators.email]],
        password : ['', Validators.required]
      }
    )
  }
  login() {



    const user = this.authservice.getListUser().subscribe(
      (res) =>{
        console.log(this.loginForm.value)
        const user = res.find((a: any) => { return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
        });
        console.log(user)
        if (user)
        {
          this.authservice.login();
          this.route.navigate(['products']);
        }
        else {
          console.log("erroooorr");
          this.errorLogin = true;
        }
      },
    (err ) => {
      console.log(err);

    }

    )


  }
  loginError()
  {
    return "l'email ou bien le password peuvent etre erroné"
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
