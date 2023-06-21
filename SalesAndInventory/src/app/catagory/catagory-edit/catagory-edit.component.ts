import { Component, OnInit } from '@angular/core';
import { CatagoryService } from '../service/catagory.service';
import { ActivatedRoute, Router } from '@angular/router';

import { FormControl, FormGroup } from '@angular/forms';
import { Catagory } from '../service/catagory';

@Component({
  selector: 'app-catagory-edit',
  templateUrl: './catagory-edit.component.html',
  styleUrls: ['./catagory-edit.component.css']
})
export class CatagoryEditComponent implements OnInit {
  
  catagory_id!: number;
  post!: Catagory;
  form1: FormGroup  =new FormGroup({
    catagory_id: new FormControl(),
          catagory_name: new FormControl(''),
          description: new FormControl(''),
  })

  constructor(private service: CatagoryService,private route: ActivatedRoute, private router: Router) { }

  
  ngOnInit(): void {
    this.catagory_id = this.route.snapshot.params['postId'];
    this.service.find(this.catagory_id).subscribe((data: Catagory)=>{
      this.post = data;
      console.log(this.post);
        this.form1 = new FormGroup({
          catagory_id: new FormControl(this.post.catagory_id),
          catagory_name: new FormControl(this.post.catagory_name),
          description: new FormControl(this.post.description),
          
        })
    }); 

  
  }

  submit() {
    console.log(this.form1.value);
    this.service.update(this.catagory_id, this.form1.value).subscribe((res:any) => {
         console.log('Post updated successfully!');
         this.router.navigateByUrl('/home/catagory-list');
    })

    } 



  get f(){
    return this.form1.controls;
     }
}