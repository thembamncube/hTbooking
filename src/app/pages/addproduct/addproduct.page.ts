import { Product } from '../../models/product';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
 import { ProductService } from '../../services/Product.service';

import firebase from 'firebase/app';
import { Router } from '@angular/router';
// require('firebase/firestore');
import 'firebase/firestore';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.page.html',
  styleUrls: ['./addproduct.page.scss'],
})
export class AddproductPage implements OnInit {
  item: Product = {
    name: '',
    imgUrl: '',
    price: 0,
    description: ''
  };

  itemForm: FormGroup;
  //item: Item;

  selectedFile: File = null;
  upLoadedFile: any;

  constructor(private fb: FormBuilder,
    private ProductService: ProductService,
    private router: Router) { }

  ngOnInit() {
    this.loadProduct();
  }
  loadProduct() {
    this.itemForm = this.fb.group({
      name: ['', Validators.required],
      imgUrl: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
  onFileSelected(event) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadstart = (p) => {
      console.log(p);
    };
    reader.onloadend = (e) => {
      console.log(e.target);
      this.upLoadedFile = reader.result;
      this.itemForm.get('imgUrl').setValue(this.upLoadedFile);
      //console.log(this.upLoadedFile);
    };
  }
  create_Product(){
    if(this.itemForm.valid){
      this.ProductService.addProduct(this.itemForm.value).then(() => {
        this.router.navigateByUrl('/');
      })
    }
      if(this.itemForm.valid){
       firebase.firestore().collection('products').add(this.item).then(res => {
         console.log(res)
         this.itemForm.reset();
       })
     }
   }
}
