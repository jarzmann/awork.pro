import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { SidemenuService } from './services/sidemenu.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public sideMenuPages;

  public publicUrls = ['/login', '/signup'];
  public showSide = false;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private menuCtrl: MenuController,
    private sMenuServ: SidemenuService
  ) {
    this.initializeApp();
    this.sideMenuState();
    this.sideMenuPages = this.sMenuServ.getSideMenu();
  }

  sideMenuState() {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd && this.publicUrls.includes(event.url)) {
        this.menuCtrl.enable(false);
        this.showSide = false;
      } else {
         this.menuCtrl.enable(true);
        this.showSide = true;
      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
