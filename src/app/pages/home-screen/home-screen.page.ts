import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Product} from '../../models/product';
import {ProductService} from '../../services/product.service'

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.page.html',
  styleUrls: ['./home-screen.page.scss'],
})
export class HomeScreenPage implements OnInit {


  constructor(private itemService: ProductService) { }
  public items: Observable<Product[]>;

  ngOnInit() {
    this.items = this.itemService.getItes();
  }

}
