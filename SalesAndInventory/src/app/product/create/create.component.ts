import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductForm } from '../product';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  constructor(private service: ServiceService,private route: ActivatedRoute, private router: Router) { }

  form1!: FormGroup;
  ngOnInit(): void {
    this.form1 = new FormGroup({
      product_id: new FormControl(),
      product_name: new FormControl(''),
      catagory: new FormControl(''),
      sub_catagory: new FormControl(''),
      brand_name: new FormControl(''),
      qty: new FormControl(),
      unit: new FormControl(''),
      purchase_price: new FormControl(),
      sku: new FormControl(''),
      date: new FormControl()
    })
  }

  submit() {
    // if (this.form1.value.product_id == null || this.form1.value.product_id == undefined) {

    //   this.service.addTask(this.form1.value).subscribe(() => {
    //     console.log('Post created successfully!');
    //      this.router.navigateByUrl('/home/productlist');
    //   this.ngOnInit();
    //   })

    // } 
    console.log(this.form1.value);

    this.service.addTask(this.form1.value).subscribe((res:any) => {
         console.log('Post created successfully!');
         this.router.navigateByUrl('/home/list');
    })

}

  get f(){
    return this.form1.controls;
     }
}