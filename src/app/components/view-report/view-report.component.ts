import { Component, OnInit,inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportService } from 'src/app/services/report.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-view-report',
  templateUrl: './view-report.component.html',
  styleUrls: ['./view-report.component.less'],
})

export class ViewReportComponent implements OnInit{

  // readonly value = [90, 90, 90, 90];
 
  activeItemIndex = NaN;

  route = inject(ActivatedRoute);
  reportService = inject(ReportService);
  studentService = inject(StudentService);
  report!:any;
  studentDetails!:any;

  tagMaths = 'Maths';
  tagScience = 'Science';
  tagEnglish = 'English';

  
  get getValues(){
    const value: readonly number[] = [this.report[0]['maths'],this.report[0]['science'],this.report[0]['english']];
    return value;
  }

  private async loadReport(studentId:string){

    try {
      this.studentDetails = await this.studentService.getStudent(studentId);  
    } catch (error) {
      console.log(error);
    }
    
    try {
      this.report = await this.reportService.getReport(studentId);
      // const props = ["page","perPage","totalItems","totalPages","items"];

      delete this.report['page'];
      delete this.report['perPage'];
      delete this.report['totalItems'];
      delete this.report['totalPages'];

      const obj = Object.assign({},this.report);
      Object.assign([],obj)
      Object.assign({},obj)

      this.report = obj['items'];
      this.report[0].student_name = this.studentDetails.name;

    } catch (error) {
      console.log(error);
      
    }
  }

  ngOnInit(){
    const studentId = this.route.snapshot.params['id'];
    this.loadReport(studentId);
  }
}
