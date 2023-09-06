import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import PocketBase from 'PocketBase';
import { ReportModel } from 'src/models/report.model';


@Injectable({
  providedIn: 'root'
})
export class ReportService {

  report!:ReportModel;

  async getReports():Promise<ReportModel[]>{
    const pb = new PocketBase(environment.baseUrl);
    const records:ReportModel[] = await pb.collection('reports').getFullList({
      sort:'-created'
    });
    return records;
  }

  async addReport(report:ReportModel){

    console.log(report);
    
    const pb = new PocketBase(environment.baseUrl);
    const response:ReportModel = await pb.collection('reports').create(report);
    return response;
  }

  async getReport(studentId:string){
    const pb = new PocketBase(environment.baseUrl);
    const resultList = await pb.collection('reports').getList(1,50,{filter:`student_id='${studentId}'`});
    return resultList;
  }

  async getReportFromReportId(reportId:string){
    const pb = new PocketBase(environment.baseUrl);
    const record = await pb.collection('reports').getOne(reportId);
    return record
  }

  async updateBook(report:ReportModel){
    const pb = new PocketBase(environment.baseUrl);
    const response: ReportModel = await pb.collection('reports').update(report.id,report);
    return response;
  }

  //Delete report
  async deleteReport(reportId:string){

    // console.log(reportId);
    
    const pb = new PocketBase(environment.baseUrl);
    const response = await pb.collection('reports').delete(reportId);
    return response;
  }
  constructor() { }
}
