import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SubCatagoryService } from '../service/sub-catagory.service';
import { SubCatagory } from '../service/subCatagory';

@Component({
  selector: 'app-sub-catagory-edit',
  templateUrl: './sub-catagory-edit.component.html',
  styleUrls: ['./sub-catagory-edit.component.css']
})
export class SubCatagoryEditComponent implements OnInit {
  
  sub_catagory_id!: number;
  post!: SubCatagory;
  form1: FormGroup  =new FormGroup({
          catagory_id: new FormControl(),
          catagory_name: new FormControl(''),
          sub_catagory_name: new FormControl(''),
          description: new FormControl(''),
  })

  constructor(private service: SubCatagoryService,private route: ActivatedRoute, private router: Router) { }

  
  ngOnInit(): void {
    this.sub_catagory_id = this.route.snapshot.params['postId'];
    this.service.find(this.sub_catagory_id).subscribe((data: SubCatagory)=>{
      this.post = data;
      console.log(this.post);
        this.form1 = new FormGroup({
          sub_catagory_id: new FormControl(this.post.sub_catagory_id),
          catagory_name: new FormControl(this.post.catagory_name),
          sub_catagory_name: new FormControl(this.post.sub_catagory_name),

          description: new FormControl(this.post.description),
          
        })
    }); 

  
  }

  submit() {
    console.log(this.form1.value);
    this.service.update(this.sub_catagory_id, this.form1.value).subscribe((res:any) => {
         console.log('Post updated successfully!');
         this.router.navigateByUrl('/home/sub-catagory-list');
    })

    } 



  get f(){
    return this.form1.controls;
     }
}
