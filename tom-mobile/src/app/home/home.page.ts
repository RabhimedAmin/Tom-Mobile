import { Component } from '@angular/core';
import { Platform, IonToolbar } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, NavigationExtras } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
tbColor="dark";
tbTitle="Home";
itemIcon: string;
  menus = [
    {
      name: 'RLA Reservation',
      filter: 'Filter1',
      icon:"globe-outline",
      color:"tertiary"
    },
    {
      name: 'Phone number assignment',
      filter: 'Filter2',
      icon:"call-outline",
      color:"purple"
    },
    {
      name: 'Linking',
      filter: 'Filter3',
      icon:"git-pull-request-outline",
      color:"warning"
    },
    {
      name: 'Commissionning',
      filter: 'Filter4',
      icon:"checkmark-done-circle-outline",
      color:"oceanColor"
    }
    ];
  constructor(private router: Router,private translateService:TranslateService) {
  }

    Goto(menu) {
      const navigationExtras: NavigationExtras = {
        queryParams :{
          myParameter: menu.filter,
          toolbarColor:menu.color,
          toolbarTitle:menu.name,
          itemIcon:menu.icon
        }
      };
      this.tbColor=navigationExtras.queryParams.toolbarColor;
      this.tbTitle=navigationExtras.queryParams.toolbarTitle;
      if (menu.name=='RLA Reservation')
      {
        this.router.navigate(["home/rla"], navigationExtras);
      }
      else
     // this.menuIcon=navigationExtras.queryParams.itemIcon
      this.router.navigate(["home/list"], navigationExtras);
      console.log(navigationExtras.queryParams.itemIcon)
      
    }
  
}
