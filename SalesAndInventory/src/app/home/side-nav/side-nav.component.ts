import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  @Input() sideNavStatus: boolean = false;
  // list = [
  //   {
  //     number: '1',
  //     name: 'home',
  //     icon: 'fa-solid fa-house'
  //   },
  //   {
  //     number: '2',
  //     name: 'Dash-Board',
  //     icon: 'fa-solid fa-chart-line'
  //   },
  //   {
  //     number: '3',
  //     name: 'Products',
  //     icon: 'fa-solid fa-box'
  //   },
  //   {
  //     number: '4',
  //     name: 'Order',
  //     icon: 'fa-solid fa-cart-shopping'
  //   },
  //   {
  //     number: '5',
  //     name: 'Setting',
  //     icon: 'fa-solid fa-gear'
  //   },
  //   {
  //     number: '6',
  //     name: 'about',
  //     icon: 'fa-solid fa-info'
  //   },
  //   {
  //     number: '6',
  //     name: 'Contact',
  //     icon: 'fa-solid fa-phone'
  //   },
  // ]
  constructor() { }
  ngOnInit(): void {

  }

}
