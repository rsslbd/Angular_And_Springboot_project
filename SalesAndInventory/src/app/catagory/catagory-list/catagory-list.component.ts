import { Component, OnInit } from '@angular/core';
import { CatagoryService } from '../service/catagory.service';
import { Catagory } from '../service/catagory';


@Component({
  selector: 'app-catagory-list',
  templateUrl: './catagory-list.component.html',
  styleUrls: ['./catagory-list.component.css']
})
export class CatagoryListComponent implements OnInit{
  list: Catagory[] = [];

  constructor(public service: CatagoryService) { }

  ngOnInit(): void {
    this.service.getTask().subscribe((data: Catagory[])=>{
      this.list = data;
      console.log(this.list);
    })  
  }
  deletePost(id:number){
    this.service.delete(id).subscribe(res => {
         this.list = this.list.filter(item => item.catagory_id!== id);
         console.log('Post deleted successfully!');
    })
  }
}

