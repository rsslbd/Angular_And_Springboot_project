import { Component, OnInit } from '@angular/core';
import { SubCatagoryService } from '../service/sub-catagory.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Catagory } from 'src/app/catagory/service/catagory';
import { CatagoryService } from 'src/app/catagory/service/catagory.service';

@Component({
  selector: 'app-sub-catagory-create',
  templateUrl: './sub-catagory-create.component.html',
  styleUrls: ['./sub-catagory-create.component.css']
})
export class SubCatagoryCreateComponent implements OnInit {
  constructor(private service: SubCatagoryService, private route: ActivatedRoute, private router: Router, private service3: CatagoryService) { }
  list3: Catagory[] = [];
  form1!: FormGroup;
  ngOnInit(): void {
    this.form1 = new FormGroup({
      sub_catagory_id: new FormControl(),
      catagory_name: new FormControl(''),
      sub_catagory_name: new FormControl(''),
    
      description: new FormControl('')
    })
    this.service3.getTask().subscribe((data: Catagory[]) => {
      this.list3 = data;
      console.log(this.list3);
    })
  }

  submit() {
   
    console.log(this.form1.value);

    this.service.addTask(this.form1.value).subscribe((res:any) => {
         console.log('Post created successfully!');
         this.router.navigateByUrl('/home/sub-catagory-list');
    })

}

  get f(){
    return this.form1.controls;
     }
}
