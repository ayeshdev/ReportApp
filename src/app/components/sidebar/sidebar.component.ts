import { Component, inject, HostListener } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { SidebarService } from 'src/app/services/sidebar.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent {

  constructor(private location: Location) {

  }
  navBarName: string = "";
  splittedUrlName: string = "";


  //services
  router = inject(Router);
  route = inject(ActivatedRoute);
  sideBarService = inject(SidebarService);
  private authService = inject(AuthService);


  urlName: string[] = [];
  
  //field
  user$ = this.authService.user$;

  getUrl() {

    this.urlName = this.location.path().split('/');
    this.location.path().split('/')

    this.splittedUrlName = this.urlName[1];
    this.sideBarService.getUrlText(this.splittedUrlName);

  }

  logout() {
    this.authService.logout();
    this.authService.updateUserSubject();
  }


  ngOnInit() {
    this.getUrl();
  }
}
