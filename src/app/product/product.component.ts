import { Component, OnInit } from '@angular/core';
import { Product } from './Product';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent {
  show:string;
  products:Product[];
  selectedProduct:Product; 
  constructor()
  {
   this.products=[new Product(1,'elitbook', '','electonics',50000),
                 new Product(2,'macbook', '','electonics',80000),
                 new Product(3,'lenevo', '','electonics',30000)
                ];
  }

  addProduct(product: Product): void {
  
    if (!product) { return; }
  }

  delete(product: Product): void {
   // this.heroes = this.heroes.filter(h => h !== hero);
   // this.heroService.deleteHero(hero).subscribe();
  }

  selectProduct(product: Product): void {
    this.selectedProduct =product;
  }


}