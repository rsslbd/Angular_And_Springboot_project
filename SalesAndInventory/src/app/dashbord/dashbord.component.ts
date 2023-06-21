import { Component, OnInit } from '@angular/core';
import { Purchase } from '../purchase/purchase-Service/purchase';
import { PurchaseService } from '../purchase/purchase-Service/purchase.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit{
  list: Purchase[] = [];

  constructor(public service: PurchaseService) { }

  ngOnInit(): void {
    this.service.getTask().subscribe((data: Purchase[])=>{
      this.list = data;
      console.log(this.list);
    })  
  }
  deletePost(id:number){
    this.service.delete(id).subscribe(res => {
         this.list = this.list.filter(item => item.purchase_id!== id);
         console.log('Post deleted successfully!');
    })
  }
}
