import { Component, OnInit } from '@angular/core';
import { CatagoryService } from '../service/catagory.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-catagory-create',
  templateUrl: './catagory-create.component.html',
  styleUrls: ['./catagory-create.component.css']
})
export class CatagoryCreateComponent implements OnInit {
  constructor(private service: CatagoryService,private route: ActivatedRoute, private router: Router) { }

  form1!: FormGroup;
  ngOnInit(): void {
    this.form1 = new FormGroup({
      catagory_id: new FormControl(),
      catagory_name: new FormControl(''),
    
      description: new FormControl('')
    })
  }

  submit() {
   
    console.log(this.form1.value);

    this.service.addTask(this.form1.value).subscribe((res:any) => {
         console.log('Post created successfully!');
         this.router.navigateByUrl('/home/catagory-list');
    })

}

  get f(){
    return this.form1.controls;
     }
}