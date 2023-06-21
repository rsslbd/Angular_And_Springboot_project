import { Component, OnInit } from '@angular/core';
import { Customer } from '../service/customer';
import { CustomerServiceService } from '../service/customer-service.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit{
  list: Customer[] = [];

  constructor(public service: CustomerServiceService) { }

  ngOnInit(): void {
    this.service.getTask().subscribe((data: Customer[])=>{
      this.list = data;
      console.log(this.list);
    })  
  }
  deletePost(id:number){
    this.service.delete(id).subscribe(res => {
         this.list = this.list.filter(item => item.customer_id!== id);
         console.log('Post deleted successfully!');
    })
  }
}

