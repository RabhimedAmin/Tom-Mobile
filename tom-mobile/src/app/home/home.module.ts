import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, RouteReuseStrategy } from '@angular/router';

import { HomePage } from './home.page';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { ListPage } from './list/list.page';
import { AccountPage } from './account/account.page';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { RlaPage } from './rlaReservation/rla.page';


@NgModule({
  imports: [
    
    FormsModule,
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
        children: [{
                    path: 'list',
                    component: ListPage
                  },
                  {
                    path: 'account',
                    component: AccountPage
                  },
                  {
                    path: 'rla',
                    component: RlaPage
                  }
                ]
      }
    ]),
     ReactiveFormsModule,    
    NgbModule,
    TranslateModule.forChild()
    
  ],
  declarations: [HomePage, ListPage, AccountPage,RlaPage],
  providers: [    StatusBar,
    SplashScreen,  { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }]
})
export class HomePageModule {}
