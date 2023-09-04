import { Injectable } from '@angular/core';
import PocketBase from 'PocketBase';
import { environment } from 'src/environments/environment.development';
import { StudentModel } from 'src/models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  //Get Students
  async getStudents():Promise<StudentModel[]>{
    const pb = new PocketBase(environment.baseUrl);
    const records:StudentModel[] = await pb.collection('students').getFullList({
      sort:'-created'
    });
    return records;
  }
  constructor() { }
}
