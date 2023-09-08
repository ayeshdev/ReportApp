import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StudentsComponent } from './components/students/students.component';
import { AddReportComponent } from './components/add-report/add-report.component';
import { ViewReportComponent } from './components/view-report/view-report.component';
import { TestComponent } from './components/test/test.component';
import { NoDataComponent } from './components/no-data/no-data.component';
import { LoginComponent } from './components/login/login.component';
import { routeGuard } from './services/route.guard';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent,canActivate:[routeGuard]},
  {path:'students',component:StudentsComponent,canActivate:[routeGuard]},
  {path:'add-report/:id',component:AddReportComponent,canActivate:[routeGuard]},
  {path:'view-report/:id',component:ViewReportComponent,canActivate:[routeGuard]},
  {path:'test',component:TestComponent,canActivate:[routeGuard]},
  {path:'edit-report/:id/:report_id',component:AddReportComponent,canActivate:[routeGuard]},
  {path:'no-data',component:NoDataComponent,canActivate:[routeGuard]},
  {path:'login',component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
