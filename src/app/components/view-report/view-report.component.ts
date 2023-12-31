import { Component, OnInit, inject, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReportService } from 'src/app/services/report.service';
import { StudentService } from 'src/app/services/student.service';
import { ReportModel } from 'src/models/report.model';
import { Location } from '@angular/common';
import { TUI_IS_E2E } from '@taiga-ui/cdk';
import { TUI_PROMPT, TuiPromptData } from '@taiga-ui/kit';
import { switchMap } from 'rxjs/operators';
import { TuiAlertService, TuiDialogService } from '@taiga-ui/core';

@Component({
  selector: 'app-view-report',
  templateUrl: './view-report.component.html',
  styleUrls: ['./view-report.component.less'],
})

export class ViewReportComponent implements OnInit {

  constructor(private location: Location, @Inject(TUI_IS_E2E) private readonly isE2E: boolean, @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
    @Inject(TuiAlertService) private readonly alerts: TuiAlertService,) { }

  activeItemIndex = NaN;

  router = inject(Router);

  route = inject(ActivatedRoute);
  reportService = inject(ReportService);
  studentService = inject(StudentService);
  report!: any;
  studentDetails!: any;

  tagMaths = 'Maths';
  tagScience = 'Science';
  tagEnglish = 'English';

  reportIdFromUrl: string = "";

  reports!: any;

  loader: boolean = false;

  // loading spinner
  loadSpinner() {
    this.loader = true;
    setTimeout(() => {
      this.loader = false;
    }, 800);
  }





  private async loadReports() {
    try {
      this.reports = await this.reportService.getReports();
    } catch (error) {
      console.log(error);
    }
  }


  get getValues() {
    const value: readonly number[] = [this.report[0]['maths'], this.report[0]['science'], this.report[0]['english']];
    return value;
  }


  //Load Report
  private async loadReport(studentId: string) {

    try {
      this.studentDetails = await this.studentService.getStudent(studentId);
    } catch (error) {
      console.log(error);
    }

    try {
      this.report = await this.reportService.getReport(studentId);

      delete this.report['page'];
      delete this.report['perPage'];
      delete this.report['totalItems'];
      delete this.report['totalPages'];


      const obj = Object.assign({}, this.report);
      Object.assign([], obj)
      Object.assign({}, obj)

      this.report = obj['items'];

      this.report[0].student_name = this.studentDetails.name;

      this.reportIdFromUrl = this.report[0].id;

    } catch (error) {
      console.log(error);

    }
  }


  //Edit Page routing function
  edit(reportId: string) {
    this.router.navigate([`/edit-report/${this.studentDetails.id}/${this.reportIdFromUrl}`])
  }

  //Delete Report
  async delete(report: ReportModel) {

    const data: TuiPromptData = {
      content:
        'You can\'t undone this action!',
      yes: 'Delete',
      no: 'Cancel',
    };

    this.dialogs
      .open<boolean>(TUI_PROMPT, {
        
        label: `Do you want to delete ${this.studentDetails.name}'s report?`,
        size: 's',
        data,
      }).subscribe(response => {
        if (response == true) {
          try {
            //Delete it from server
            this.reportService.deleteReport(this.reportIdFromUrl);
          } catch (error) {
            console.log(error);
          }
          this.location.back();
        }
      }
      );
  }

  ngOnInit() {
    const studentId = this.route.snapshot.params['id'];
    this.loadReport(studentId);
    this.loadReports();

    this.loadSpinner();
  }
}
