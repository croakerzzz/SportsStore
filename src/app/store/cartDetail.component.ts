import {Component} from "@angular/core";
import {Cart} from "../model/cart.model";
import {Product} from "../model/product.model";

@Component({
  selector: 'cart-detail',
  templateUrl: 'cartDetail.component.html'
})
export class CartDetailComponent {

  constructor(public cart: Cart) {
  }

  updateQuantity(product: Product, $event: any) {
    this.cart.updateQuantity(product, $event.target.value);
  }

}
