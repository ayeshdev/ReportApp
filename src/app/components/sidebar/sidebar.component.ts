import { Component, inject,HostListener } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { SidebarService } from 'src/app/services/sidebar.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent {

  constructor(private location:Location){
 
  }
  navBarName:string = "";
  splittedUrlName:string = "";

  router = inject(Router);
  route = inject(ActivatedRoute);
  sideBarService = inject(SidebarService);


  urlName:string[] = [];

  getUrl(){

    this.urlName = this.location.path().split('/');
    this.location.path().split('/')
    
    this.splittedUrlName = this.urlName[1];
    this.sideBarService.getUrlText(this.splittedUrlName);

  }


  ngOnInit(){
    this.getUrl();
  }
}
