//import { Injectable } from '@angular/core';
import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, DocumentReference} from '@angular/fire/firestore';
import {map, take} from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private items: Observable<Product[]>;
  private collectionName: AngularFirestoreCollection<Product>;
  constructor(private afs: AngularFirestore) {


    this.collectionName = this.afs.collection<Product>('lists');
    this.items = this.collectionName.snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
    );



   }
   // retrieve
  getItes(): Observable<Product[]> {
    return this.items;
  }
  //get single item
  getProduct(id: string): Observable<Product> {
    return this.collectionName.doc<Product>(id).valueChanges().pipe(
        take(1),
        map(item => {
          item.id = id;
          return item;
        })
    );
  }
  addProduct(product: Product): Promise<DocumentReference> {
    return this.collectionName.add(product);
  //  this.cartItemCount.next(this.cartItemCount.value + 1)
  }
}
