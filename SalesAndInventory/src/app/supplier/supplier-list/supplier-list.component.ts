import { Component, OnInit } from '@angular/core';
import { Supplier } from '../service/supplier';
import { SupplierServiceService } from '../service/supplier-service.service';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css']
})
export class SupplierListComponent implements OnInit{
  list: Supplier[] = [];

  constructor(public service: SupplierServiceService) { }

  ngOnInit(): void {
    this.service.getTask().subscribe((data: Supplier[])=>{
      this.list = data;
      console.log(this.list);
    })  
  }
  deletePost(id:number){
    this.service.delete(id).subscribe(res => {
         this.list = this.list.filter(item => item.supplier_id!== id);
         console.log('Post deleted successfully!');
    })
  }
}