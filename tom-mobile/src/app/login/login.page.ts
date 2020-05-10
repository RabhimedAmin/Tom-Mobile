import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  constructor(private formBuilder:FormBuilder,
    private router: Router,
     private menuCtrl:MenuController) {
   }

  public showPassword: boolean = false;

  public onPasswordToggle(): void {
    this.showPassword = !this.showPassword;
  }

  ngOnInit(
    
  ) {

this.loginForm=this.formBuilder.group({ 
  userName: ['',[ Validators.required ,UsernameValidator.cannotContainSpace]],
password: ['', Validators.required]})
    
  }


  
/* loginform=new FormGroup({
    username:new FormControl([''],Validators.required),
    password:new FormControl([''],Validators.required)
 
  });
*/
 get formValidation(){
   return this.loginForm.controls;
 }
 /*
 getUsername(){
   return this.loginForm.get('username');
 }
 getPassword(){
  return this.loginForm.get('password');
}
*/

public submit() {
  this.submitted = true;
  if (this.loginForm.invalid ) {
    return console.log("not ok");
}
   ////... te5dem 5edmtek wa9teli kol chay valid
   console.log("ok") 
   this.router.navigate(['/home']);

}

// blanc space validator
}
export class UsernameValidator {
  static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {
      if((control.value as string).indexOf(' ') >= 0){
          return {cannotContainSpace: true}
      }

      return null;
  }
}