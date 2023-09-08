import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit{

  //services
  private formBuilder: FormBuilder = inject(FormBuilder);
  private authService: AuthService = inject(AuthService);
  private alertService: AlertService = inject(AlertService);
  private router: Router = inject(Router);

  //fields
  loginForm !: FormGroup;
  alert$ = this.alertService.alert$;

  //getter for validation purpose
  get f(){
    return this.loginForm.controls;
  }

  //functions
  async login(){

    console.log("login");
    
    try {
      this.alertService.setAlert({alertClass:'pending',message:'wait'});
  
      const username = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('password')?.value;
      const loginResult : boolean = await this.authService.login(username,password);
  
      this.alertService.setAlert({alertClass: 'success', message:'redirecting to dashboard'});
      this.router.navigate(['/home']);
    } catch (error) {
      console.log(error);
      this.alertService.setAlert({alertClass:'error',message:'Invalid username or password'});
    }
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      'username' : ['', Validators.required],
      'password' : ['', Validators.required],
    });

    this.alertService.clearAlert();
  }

}
