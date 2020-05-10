import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.page.html',
  styleUrls: ['./user-profil.page.scss'],
})
export class UserProfilPage implements OnInit {
  user: any;

  constructor() { }

  ngOnInit() {
    this.user= new User;
  }

}
export class User {
  username:string ="Amin93";
  password:string ="123456";
  firstName:string="Amin";
  lastName:string="Rabhi";
  birthDate=new Date("1993-10-22");
  Email:string ="aminrhrh@gmail.com";
  Contact:number =53161134;
  
}