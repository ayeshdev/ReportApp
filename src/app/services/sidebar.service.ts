import { Injectable, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor(){}

  activeItemIndex!:number;

  getUrlText(tabName:string){    
    
    if(tabName == 'home'){
      this.activeItemIndex = 0;
    }else if(tabName == 'students'){
      this.activeItemIndex = 1;
    }
  }

}
