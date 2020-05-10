import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  filter : string;
  toolbarTitle:string;
  toolbarColor:string;
  itemIcon:string;
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
        this.filter = params["myParameter"],this.toolbarColor=params["toolbarColor"],this.toolbarTitle=params["toolbarTitle"],this.itemIcon=params["itemIcon"]
    });
   }

  ngOnInit() {
    console.log(this.products);
  }

  products = [
    { "product": "shop 1", "description": "this is the product" },
    { "product": "shop 2", "description": "this is the product" },
    { "product": "shop 3", "description": "this is the product" }
  ];
 myfunction(){

}}
