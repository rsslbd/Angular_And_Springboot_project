import { Component, OnInit } from '@angular/core';
import { SignUpService } from 'src/app/AllServices/sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private signUpService: SignUpService) { }
  ngOnInit(): void {
  }
  onSubmit(): void {
    console.log("tru86tuityut");
    
    const { username, email, password } = this.form;
    this.signUpService.register(username, email, password).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    })
  }

}
