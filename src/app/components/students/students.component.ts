import { Component, OnInit, inject } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.less'],
})
export class StudentsComponent implements OnInit{

  studentService = inject(StudentService);
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

  ngOnInit(){    
    this.loadStudents();
  }
}
