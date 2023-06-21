import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { CustomerServiceService } from '../service/customer-service.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  constructor(private service: CustomerServiceService,private route: ActivatedRoute, private router: Router) { }

  form1!: FormGroup;
  ngOnInit(): void {
    this.form1 = new FormGroup({
      customer_id: new FormControl(),
      customer_name: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      country: new FormControl(''),
      city: new FormControl(''),
      address: new FormControl('')
    })
  }

  submit() {
   
    console.log(this.form1.value);

    this.service.addTask(this.form1.value).subscribe((res:any) => {
         console.log('Post created successfully!');
         this.router.navigateByUrl('/home/customer-list');
    })

}

  get f(){
    return this.form1.controls;
     }
}
