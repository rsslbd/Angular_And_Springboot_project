import { Component, OnInit } from '@angular/core';
import { Sales } from '../service/sales';
import { SalesServiceService } from '../service/sales-service.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Purchase } from 'src/app/purchase/purchase-Service/purchase';

@Component({
  selector: 'app-sales-view',
  templateUrl: './sales-view.component.html',
  styleUrls: ['./sales-view.component.css']
})
export class SalesViewComponent implements OnInit {

  sales_id!: number;
  post!: Sales;
  form1: FormGroup = new FormGroup({
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

  constructor(private service: SalesServiceService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    this.sales_id = this.route.snapshot.params['postId'];
    this.service.find(this.sales_id).subscribe((data: Sales) => {
      this.post = data;
      console.log(this.post);
      this.form1 = new FormGroup({
        sales_id: new FormControl(this.post.sales_id),
        customer_name: new FormControl(this.post.customer_name),
        catagory: new FormControl(this.post.catagory),
        sub_catagory: new FormControl(this.post.sub_catagory),
        product_name: new FormControl(this.post.product_name),
        brand_name: new FormControl(this.post.brand_name),
        sku: new FormControl(this.post.sku),
        supplier_name: new FormControl(this.post.supplier_name),
        status: new FormControl(this.post.status),
        qty: new FormControl(this.post.qty),
        unit: new FormControl(this.post.unit),
        selling_price: new FormControl(this.post.selling_price),
        tax_percentage: new FormControl(this.post.tax_percentage),
        discount_percentage: new FormControl(this.post.discount_percentage),
        paid: new FormControl(this.post.paid),
        due: new FormControl(this.post.due),
        payment_status: new FormControl(this.post.payment_status),
        date: new FormControl(this.post.date)
      })
    });


  }
  get f() {
    return this.form1.controls;
  }
  printThisPage() {
    window.print();
  }
}
