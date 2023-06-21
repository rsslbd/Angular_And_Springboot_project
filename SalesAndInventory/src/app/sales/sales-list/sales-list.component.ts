import { Component, OnInit } from '@angular/core';
import { SalesServiceService } from '../service/sales-service.service';
import { Sales } from '../service/sales';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.css']
})
export class SalesListComponent implements OnInit{
  list: Sales[] = [];

  constructor(public service: SalesServiceService) { }

  ngOnInit(): void {
    this.service.getTask().subscribe((data: Sales[])=>{
      this.list = data;
      console.log(this.list);
    })  
  }
  deletePost(id:number){
    this.service.delete(id).subscribe(res => {
         this.list = this.list.filter(item => item.sales_id!== id);
         console.log('Post deleted successfully!');
    })
  }
}
