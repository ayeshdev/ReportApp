import { Location } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ReportService } from 'src/app/services/report.service';
import { StudentService } from 'src/app/services/student.service';
import { ReportModel } from 'src/models/report.model';

@Component({
  selector: 'app-add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.less'],
})
export class AddReportComponent implements OnInit{

  constructor(private location:Location){}

  formBuilder = inject(FormBuilder);
  studentService = inject(StudentService);
  reportService = inject(ReportService);
  route = inject(ActivatedRoute);
  studentDetails!:any;
  reportForm !: FormGroup;
  message:string = "";
  action = "Add";


  //Get Contollers
  get getControls(){
    return this.reportForm.controls;
  }


  //add report call method
  async onPost(){
    if(this.action == "Add"){
      await this.addReport();
    }else{
      this.updateReport();
    }
  }

  // Add Report
  private async addReport(){
    try {
      this.message = "pending";
      const report = this.reportForm.value as ReportModel;
      report.student_id = this.route.snapshot.params['id'];
      await this.reportService.addReport(report);
      this.message = "Successfully Added!";
      this.reportForm.reset();
      this.location.back();
      
    } catch (error) {
      console.log(error);
      this.message = "Something went wrong";
    }
  }


  // Update Report
  private async updateReport(){
    try {
      this.message = "pending";
      const report = this.reportForm.value as ReportModel;
      report.student_id = this.route.snapshot.params['student_id'];
      await this.reportService.updateBook(report);
      this.message = "Successfully Updated!";
    } catch (error) {
      console.log(error);
      this.message = "Something went wrong!";
    }
  }


  private async loadStudent(studentId:string){
    try {
      this.studentDetails = await this.studentService.getStudent(studentId);  
    } catch (error) {
      console.log(error);
    }
  }


  private async loadEditForm(reportId:string){
    try {
      const reportToUpdate = await this.reportService.getReportFromReportId(reportId); 

      if(reportToUpdate){
        this.reportForm.patchValue(reportToUpdate);
      }
    } catch (error) {
      console.log(error);
    }
  }


  ngOnInit(){

    this.reportForm = this.formBuilder.group({
      'id':[''],
      'maths':['',[Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(1), Validators.maxLength(3), Validators.max(100), Validators.min(0)]],
      'science':['',[Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(1), Validators.maxLength(3), Validators.max(100), Validators.min(0)]],
      'english':['',[Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(1), Validators.maxLength(3), Validators.max(100), Validators.min(0)]],
      'student_id':[''],
    })
    
    const studentId = this.route.snapshot.params['id'];
    const reportId = this.route.snapshot.params['report_id'];

    

    this.loadStudent(studentId)

    if(reportId){
      this.action = "Edit";
      this.loadEditForm(reportId);
    }
    
  }
}
