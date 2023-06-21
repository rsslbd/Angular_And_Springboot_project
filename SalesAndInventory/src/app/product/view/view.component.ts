import { Component, OnInit } from '@angular/core';
import { ProductForm } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{
  
  product_id!: number;
  post!: ProductForm;
  form1: FormGroup  = new FormGroup({
    product_id: new FormControl(),
    product_name: new FormControl(''),
    product_catagory: new FormControl(''),
    product_sub_catagory: new FormControl(''),
    brand_name: new FormControl(''),
    qty: new FormControl(),
    unit: new FormControl(''),
    price: new FormControl(),
    sku: new FormControl(''),
    date: new FormControl()
  })

  constructor(
    public service: ServiceService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
  
  ngOnInit(): void {
    this.product_id = this.route.snapshot.params['postId'];
    this.service.find(this.product_id).subscribe((data: ProductForm)=>{
      this.post = data;
      console.log(this.post);
        this.form1 = new FormGroup({
      product_id: new FormControl(this.post.product_id),
      product_name: new FormControl(this.post.product_name ),
      
      catagory: new FormControl(this.post.catagory),
      
      sub_catagory: new FormControl(this.post.sub_catagory),
      brand_name: new FormControl(this.post.brand_name),
      qty: new FormControl(this.post.qty),
      unit: new FormControl(this.post.unit),
      purchase_price: new FormControl(this.post.purchase_price),
      sku: new FormControl(this.post.sku),
      date: new FormControl(this.post.date)
    })
    }); 
  }
  get f(){
    return this.form1.controls;
     }
}
