import { Component, OnInit } from '@angular/core';
import { ProductForm } from '../product';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  list: ProductForm[] = [];

  constructor(public service: ServiceService) { }

  ngOnInit(): void {
    this.service.getTask().subscribe((data: ProductForm[])=>{
      this.list = data;
      console.log(this.list);
    })  
  }
  deletePost(id:number){
    this.service.delete(id).subscribe(res => {
         this.list = this.list.filter(item => item.product_id!== id);
         console.log('Post deleted successfully!');
    })
  }
}
