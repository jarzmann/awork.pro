import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidemenuService {

  public sideMenuPages = [
    {
      title: 'Home',
      url: '/tabs/home',
      icon: 'home'
    },
    {
      title: 'About',
      url: '/tabs/about',
      icon: 'list'
    },
    {
      title: 'Contact',
      url: '/tabs/contact',
      icon: 'people'
    },
    {
      title: 'Profile',
      url: '/tabs/profile',
      icon: 'cog'
    },
  ];
  constructor() { }

  getSideMenu() {
    return this.sideMenuPages;
  }

}
