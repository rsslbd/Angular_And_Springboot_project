import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductForm } from '../product';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
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

  constructor(private service: ServiceService,private route: ActivatedRoute, private router: Router) { }

  
  ngOnInit(): void {
    this.product_id = this.route.snapshot.params['postId'];
    this.service.find(this.product_id).subscribe((data: ProductForm)=>{
      this.post = data;
      console.log(this.post);
        this.form1 = new FormGroup({
      product_id: new FormControl(this.post.product_id),
      product_name: new FormControl(this.post.product_name),
      catagory: new FormControl(this.post.catagory),
      sub_catagory: new FormControl(this.post.sub_catagory),
      brand_name: new FormControl(this.post.brand_name),
      qty: new FormControl(this.post.qty),
      unit: new FormControl(this.post.unit),
      pripurchase_pricece: new FormControl(this.post.purchase_price),
      sku: new FormControl(this.post.sku),
      date: new FormControl(this.post.date)
    })
    }); 

  
  }

  submit() {
    // if (this.form1.value.product_id == null || this.form1.value.product_id == undefined) {

    //   this.service.addTask(this.form1.value).subscribe(() => {
    //     console.log('Post created successfully!');
    //      this.router.navigateByUrl('/home/productlist');
    //   this.ngOnInit();
    //   })

    console.log(this.form1.value);
    this.service.update(this.product_id, this.form1.value).subscribe((res:any) => {
         console.log('Post updated successfully!');
         this.router.navigateByUrl('/home/list');
    })

    } 



  get f(){
    return this.form1.controls;
     }
}