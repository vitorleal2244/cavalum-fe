import { Component } from '@angular/core';
import { ProductCardComponent } from '../../../core/components/store/product-card/product-card.component';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
    standalone: true,
    imports: [ProductCardComponent]
})
export class ListComponent {
  public products = [
    {
      id: 1,
      name: 'Product 1',
      price: 100
    },
    {
      id: 2,
      name: 'Product 2',
      price: 200
    }
  ];
}
