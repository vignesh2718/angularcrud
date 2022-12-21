import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';
import * as alertifyjs from 'alertifyjs';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private service: UserService) { }

  ngOnInit(): void {
  }
  respdata: any;

  RedirectLogin() {
    this.router.navigate(['login']);
  }
  reactiveform = new FormGroup({
    userid: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    email: new FormControl('', Validators.compose([Validators.required, Validators.email]))
  });
  SaveUser() {
    if (this.reactiveform.valid) {
      this.service.Registration(this.reactiveform.value).subscribe(item => {
        this.respdata = item;
        if(this.respdata.result=='pass'){
         alertifyjs.error("Failed")
        //  this.RedirectLogin();
        }else{
          // alert("failed try again");
          alertifyjs.success("Registered Succesfully please contact admin")
          this.RedirectLogin();
        }
      });
    }

  }

}
