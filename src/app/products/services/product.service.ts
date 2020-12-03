import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): any[] {
    return [{
      id: 1,
      name: 'Apple',
      category: 'Fruits',
      price: '$2.76'
    }, {
      id: 2,
      name: 'Cheese',
      category: 'Dairy',
      price: '$6.38'
    }, {
      id: 3,
      name: 'Orange',
      category: 'Fruits',
      price: '$4.85'
    }, {
      id: 4,
      name: 'Tomato',
      category: 'Vegetables',
      price: '$5.01'
    }, {
      id: 5,
      name: 'Table Cloth',
      category: 'Kitchen Essentials',
      price: '$6.13'
    }, {
      id: 6,
      name: 'Cranberries - Frozen',
      category: 'Fruits',
      price: '$7.08'
    }, {
      id: 7,
      name: 'Angular 7 Book',
      category: 'Books',
      price: '$6.89'
    }, {
      id: 8,
      name: 'NFS - PS4 Game',
      category: 'Games',
      price: '$9.48'
    }, {
      id: 9,
      name: 'Pepper',
      category: 'Grocery',
      price: '$5.51'
    }, {
      id: 10,
      name: 'Potatoes - Organic',
      category: 'Vegetables',
      price: '$9.63'
    }];
  }
}
