import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { StorageService } from 'src/app/AllService/storage.service';
import { SignUpService } from 'src/app/AllServices/sign-up.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: any[] = [];
  username: string = ''

  constructor(private signUpService: SignUpService, private storageService: StorageService, private router: Router) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.username = this.storageService.getUser().userName;
      this.roles = this.storageService.getUser().roles;
      // this.router.navigateByUrl("/home")

    }
  }

  onSubmit(): void {

    console.log("jkjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj");
    
    const { username, password } = this.form;
    // console.log("Role---- -- -- ", this.form)

    this.signUpService.login(username, password).subscribe({

      next: data => {
        // console.log("Role---- -- -- ",data)
        // this.reloadPage();
        this.storageService.saveUser(data);
        console.log("Role---- -- -- ", this.storageService.getUser().role)

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().role;

        const user = this.storageService.getUser();

        // console.log("user-----",user)

        this.username = this.storageService.getUser().userName;
        console.log("user name-----", this.username)
        this.router.navigateByUrl("/home")
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }
}
