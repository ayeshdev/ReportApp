import { Component, OnInit, inject } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.less'],
})
export class StudentsComponent implements OnInit{

  studentService = inject(StudentService);
  sideBarService = inject(SidebarService);
  students !: any;

  searchText = "";

  //Load Students
  private async loadStudents(){
    try {
      this.students  = await this.studentService.getStudents();
    } catch (error) {
      console.log(error);
    }
  }

  //sidebar load


  ngOnInit(){    
    this.loadStudents();
    this.sideBarService.getUrlText("students");
  }
}
