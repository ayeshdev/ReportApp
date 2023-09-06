import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StudentsComponent } from './components/students/students.component';
import { AddReportComponent } from './components/add-report/add-report.component';
import { ViewReportComponent } from './components/view-report/view-report.component';
import { TestComponent } from './components/test/test.component';
import { NoDataComponent } from './components/no-data/no-data.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'students',component:StudentsComponent},
  {path:'add-report/:id',component:AddReportComponent},
  {path:'view-report/:id',component:ViewReportComponent},
  {path:'test',component:TestComponent},
  {path:'edit-report/:id/:report_id',component:AddReportComponent},
  {path:'no-data',component:NoDataComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
