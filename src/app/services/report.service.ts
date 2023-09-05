import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import PocketBase from 'PocketBase';
import { ReportModel } from 'src/models/report.model';


@Injectable({
  providedIn: 'root'
})
export class ReportService {

  async addReport(report:ReportModel){

    console.log(report);
    
    const pb = new PocketBase(environment.baseUrl);
    const response:ReportModel = await pb.collection('reports').create(report);
    return response;
  }

  constructor() { }
}
