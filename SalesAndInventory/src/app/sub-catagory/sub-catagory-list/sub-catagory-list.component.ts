import { Component, OnInit } from '@angular/core';
import { Catagory } from 'src/app/catagory/service/catagory';
import { SubCatagoryService } from '../service/sub-catagory.service';
import { SubCatagory } from '../service/subCatagory';

@Component({
  selector: 'app-sub-catagory-list',
  templateUrl: './sub-catagory-list.component.html',
  styleUrls: ['./sub-catagory-list.component.css']
})
export class SubCatagoryListComponent implements OnInit{
  list: SubCatagory[] = [];

  constructor(public service: SubCatagoryService) { }

  ngOnInit(): void {
    this.service.getTask().subscribe((data: SubCatagory[])=>{
      this.list = data;
      console.log(this.list);
    })  
  }
  deletePost(id:number){
    this.service.delete(id).subscribe(res => {
         this.list = this.list.filter(item => item.sub_catagory_id!== id);
         console.log('Post deleted successfully!');
    })
  }
}

