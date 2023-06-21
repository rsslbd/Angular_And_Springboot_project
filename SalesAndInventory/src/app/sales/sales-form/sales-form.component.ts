import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { SalesServiceService } from '../service/sales-service.service';
import { FormGroup, FormControl } from '@angular/forms';
import { SupplierServiceService } from 'src/app/supplier/service/supplier-service.service';
import { Supplier } from 'src/app/supplier/service/supplier';
import { CustomerServiceService } from 'src/app/customer/service/customer-service.service';
import { Customer } from 'src/app/customer/service/customer';
import { Catagory } from 'src/app/catagory/service/catagory';
import { SubCatagory } from 'src/app/sub-catagory/service/subCatagory';
import { CatagoryService } from 'src/app/catagory/service/catagory.service';
import { SubCatagoryService } from 'src/app/sub-catagory/service/sub-catagory.service';

@Component({
  selector: 'app-sales-form',
  templateUrl: './sales-form.component.html',
  styleUrls: ['./sales-form.component.css']
})
export class SalesFormComponent implements OnInit {

  constructor(private service: SalesServiceService, private route: ActivatedRoute, private router: Router, private service1: SupplierServiceService, private service2: CustomerServiceService, private service3: CatagoryService, private service4: SubCatagoryService) { }
  list1: Supplier[] = [];
  list2: Customer[] = [];
  list3: Catagory[] = [];
  list4: SubCatagory[] = [];




  form1!: FormGroup;
  ngOnInit(): void {
    this.form1 = new FormGroup({
      sales_id: new FormControl(),
      customer_name: new FormControl(''),
      catagory: new FormControl('',),
      sub_catagory: new FormControl(''),
      product_name: new FormControl(''),
      brand_name: new FormControl(''),
      sku: new FormControl(''),
      supplier_name: new FormControl(''),
      status: new FormControl(''),
      qty: new FormControl(),
      unit: new FormControl(''),
      selling_price: new FormControl(),
      discount_percentage: new FormControl(),
      tax_percentage: new FormControl(),
      total: new FormControl(),
      paid: new FormControl(),
      due: new FormControl(),
      payment_status: new FormControl(''),
      date: new FormControl()
    })
    this.service1.getTask().subscribe((data: Supplier[]) => {
      this.list1 = data;
      console.log(this.list1);
    })
    this.service2.getTask().subscribe((data: Customer[]) => {
      this.list2 = data;
      console.log(this.list2);
    })
    this.service3.getTask().subscribe((data: Catagory[]) => {
      this.list3 = data;
      console.log(this.list3);
    })
    this.service4.getTask().subscribe((data: SubCatagory[]) => {
      this.list4 = data;
      console.log(this.list4);
    })
  }

  submit() {

    console.log(this.form1.value);

    this.service.addTask(this.form1.value).subscribe(() => {
      console.log('Post created successfully!');
      this.router.navigateByUrl('/home/sales-list');

    });



  }

  get f() {
    return this.form1.controls;
  }
}
