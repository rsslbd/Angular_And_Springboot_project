import { Component, OnInit } from '@angular/core';
import { Purchase } from '../purchase-Service/purchase';
import { PurchaseService } from '../purchase-Service/purchase.service';

@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.css']
})
export class PurchaseListComponent implements OnInit{
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
