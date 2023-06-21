import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductForm } from 'src/app/product/product';
import { ServiceService } from 'src/app/product/service.service';
import { Purchase } from '../purchase-Service/purchase';
import { PurchaseService } from '../purchase-Service/purchase.service';

@Component({
  selector: 'app-purchase-edit',
  templateUrl: './purchase-edit.component.html',
  styleUrls: ['./purchase-edit.component.css']
})
export class PurchaseEditComponent implements OnInit {
  
  purchase_id!: number;
  post!: Purchase;
  form1: FormGroup  = new FormGroup({
    purchase_id: new FormControl(),
    catagory:new FormControl(''),
    sub_catagory:new FormControl(''),

    product_name: new FormControl(''),
    brand_name: new FormControl(''),
    sku: new FormControl(''),
    supplier_name: new FormControl(''),
    
    status: new FormControl(''),
    qty: new FormControl(),
    unit: new FormControl(''),
    purchase_price: new FormControl(),
  
    paid: new FormControl(),
    payment_status: new FormControl(''),
    date: new FormControl()
  })

  constructor(private service: PurchaseService,private route: ActivatedRoute, private router: Router) { }

  
  ngOnInit(): void {
    this.purchase_id = this.route.snapshot.params['postId'];
    this.service.find(this.purchase_id).subscribe((data: Purchase)=>{
      this.post = data;
      console.log(this.post);
        this.form1 = new FormGroup({
          purchase_id: new FormControl(this.post.purchase_id),
          catagory:new FormControl(this.post.catagory),
          sub_catagory:new FormControl(this.post.sub_catagory),

          product_name: new FormControl(this.post.product_name),
          brand_name: new FormControl(this.post.brand_name),
          sku: new FormControl(this.post.sku),
          supplier_name: new FormControl(this.post.supplier_name),
          
          status: new FormControl(this.post.status),
          qty: new FormControl(this.post.qty),
          unit: new FormControl(this.post.unit),
          purchase_price: new FormControl(this.post.purchase_price),
        
          paid: new FormControl(this.post.paid),
          payment_status: new FormControl(this.post.payment_status),
          date: new FormControl(this.post.date)
        })
    }); 

  
  }

  submit() {
    

    console.log(this.form1.value);
    this.service.update(this.purchase_id, this.form1.value).subscribe((res:any) => {
         console.log('Post updated successfully!');
         this.router.navigateByUrl('/home/purchase-list');
    })

    } 



  get f(){
    return this.form1.controls;
     }
}
