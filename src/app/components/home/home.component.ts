import { Component,ChangeDetectionStrategy,OnInit, inject } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit{

  sideBarService = inject(SidebarService);

  ngOnInit(){
    this.sideBarService.getUrlText("home");
  }

}
