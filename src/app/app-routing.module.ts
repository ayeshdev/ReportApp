import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StudentsComponent } from './components/students/students.component';
import { ReportService } from './services/report.service';

const routes: Routes = [
  // {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'',component:HomeComponent},
  {path:'students',component:StudentsComponent},
  {path:'reports',component:ReportService},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
