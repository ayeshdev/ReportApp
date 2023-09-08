import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { AlertModel } from 'src/models/alert.model';
import { UserModel } from 'src/models/user.model';
import PocketBase from 'PocketBase';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

private userSubject: BehaviorSubject<UserModel | null> = new BehaviorSubject<UserModel | null>(null);
user$ = this.userSubject.asObservable();

async login(username:string, password:string){

  console.log(username);
  console.log(password);
  
  const pb = new PocketBase(environment.baseUrl);

  const authData = await pb.collection('users').authWithPassword(username,password);

  this.userSubject.next({isValid:pb.authStore.isValid, username:pb.authStore.model?.['email']});

  console.log(pb.authStore.isValid);
  console.log(pb.authStore.token);

  return true;
  
}

async logout(){
  const pb = new PocketBase(environment.baseUrl);
  pb.authStore.clear();
}

updateUserSubject(){
  const pb = new PocketBase(environment.baseUrl);
  this.userSubject.next({isValid: pb.authStore.isValid, username: pb.authStore.model?.['email']});
}
  

  constructor() { }
}
