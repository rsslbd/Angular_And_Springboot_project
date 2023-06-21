import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../service/customer';
import { CustomerServiceService } from '../service/customer-service.service';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {
  
  customer_id!: number;
  post!: Customer;
  form1: FormGroup  =new FormGroup({
    customer_id: new FormControl(),
    customer_name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    country: new FormControl(''),
    city: new FormControl(''),
    address: new FormControl('')
  })

  constructor(private service: CustomerServiceService,private route: ActivatedRoute, private router: Router) { }

  
  ngOnInit(): void {
    this.customer_id = this.route.snapshot.params['postId'];
    this.service.find(this.customer_id).subscribe((data: Customer)=>{
      this.post = data;
      console.log(this.post);
        this.form1 = new FormGroup({
          customer_id: new FormControl(this.post.customer_id),
          customer_name: new FormControl(this.post.customer_name),
          email: new FormControl(this.post.email),
          phone: new FormControl(this.post.phone),
          country: new FormControl(this.post.country),
          city: new FormControl(this.post.city),
          address: new FormControl(this.post.address)
        })
    }); 

  
  }
 get f(){
    return this.form1.controls;
     }
}