import { Component, OnInit } from '@angular/core';
import { SupplierServiceService } from '../service/supplier-service.service';
import { Supplier } from '../service/supplier';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-supplier-edit',
  templateUrl: './supplier-edit.component.html',
  styleUrls: ['./supplier-edit.component.css']
})
export class SupplierEditComponent implements OnInit {
  
  supplier_id!: number;
  post!: Supplier;
  form1: FormGroup  =new FormGroup({
    supplier_id: new FormControl(),
    supplier_name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    country: new FormControl(''),
    city: new FormControl(''),
    address: new FormControl('')
  })

  constructor(private service: SupplierServiceService,private route: ActivatedRoute, private router: Router) { }

  
  ngOnInit(): void {
    this.supplier_id = this.route.snapshot.params['postId'];
    this.service.find(this.supplier_id).subscribe((data: Supplier)=>{
      this.post = data;
      console.log(this.post);
        this.form1 = new FormGroup({
          supplier_id: new FormControl(this.post.supplier_id),
          supplier_name: new FormControl(this.post.supplier_name),
          email: new FormControl(this.post.email),
          phone: new FormControl(this.post.phone),
          country: new FormControl(this.post.country),
          city: new FormControl(this.post.city),
          address: new FormControl(this.post.address)
        })
    }); 

  
  }

  submit() {
    console.log(this.form1.value);
    this.service.update(this.supplier_id, this.form1.value).subscribe((res:any) => {
         console.log('Post updated successfully!');
         this.router.navigateByUrl('/home/supplier-list');
    })

    } 



  get f(){
    return this.form1.controls;
     }
}