import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { CatagoryService } from '../service/catagory.service';
import { Catagory } from '../service/catagory';

@Component({
  selector: 'app-catagory-view',
  templateUrl: './catagory-view.component.html',
  styleUrls: ['./catagory-view.component.css']
})
export class CatagoryViewComponent implements OnInit {
  
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
 get f(){
    return this.form1.controls;
     }
}
