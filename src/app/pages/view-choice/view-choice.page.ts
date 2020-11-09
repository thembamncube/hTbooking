import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import {Product} from '../../models/product'
@Component({
  selector: 'app-view-choice',
  templateUrl: './view-choice.page.html',
  styleUrls: ['./view-choice.page.scss'],
})
export class ViewChoicePage implements OnInit {
  product: Product = {
    name: '',
    imgUrl: '',
    price: 0,
    description: ''
  };
  constructor( private itemService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }
 
  
  id: any;
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.itemService.getProduct(this.id).subscribe(res => {
        this.product = res;
      });
    }
  }

}
