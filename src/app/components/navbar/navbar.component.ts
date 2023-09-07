import { Component, OnInit, inject } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit{

  constructor(private location:Location){}

  navBarName:string = "";
  splittedUrlName:string = "";

  router = inject(Router);
  route = inject(ActivatedRoute);

  urlName:string[] = [];

  getUrlText(){

    this.urlName = this.location.path().split('/');
    this.location.path().split('/')
    
    this.splittedUrlName = this.urlName[1];
    
    if(this.splittedUrlName == 'students'){
      this.navBarName = "Students";
    }else if(this.splittedUrlName == 'view-report'){
      this.navBarName = "View Report";
    }else if(this.splittedUrlName == 'add-report'){
      this.navBarName = "Add Report";
    }else if(this.splittedUrlName == 'home'){
      this.navBarName = "Dashboard";
    }
  }

  ngOnInit(){
    this.getUrlText();
  }

}
