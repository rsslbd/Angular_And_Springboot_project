import { Component, OnInit } from '@angular/core';
import { SupplierServiceService } from '../service/supplier-service.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-supplier-create',
  templateUrl: './supplier-create.component.html',
  styleUrls: ['./supplier-create.component.css']
})
export class SupplierCreateComponent implements OnInit {
  constructor(private service: SupplierServiceService,private route: ActivatedRoute, private router: Router) { }

  form1!: FormGroup;
  ngOnInit(): void {
    this.form1 = new FormGroup({
      supplier_id: new FormControl(),
      supplier_name: new FormControl(''),
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
         this.router.navigateByUrl('/home/supplier-list');
    })

}
// submit() {
   
//   console.log(this.form1.value);

//   this.service.addTask(this.form1.value).subscribe((res:any) => {
//        console.log('Post created successfully!');
//        this.router.navigateByUrl('/home/purchase-list');
//   })

// }

  get f(){
    return this.form1.controls;
     }
}

