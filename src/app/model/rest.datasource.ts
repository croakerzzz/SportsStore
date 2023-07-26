import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Product} from "./product.model";
import {Order} from "./order.model";
import {HttpClient} from "@angular/common/http";

const PROTOCOL = "http";
const PORT = 3500;

// @ts-ignore
@Injectable()
export class RestDataSource {
  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseUrl + "products");
  }

  saveOrder(order: Order): Observable<Order> {
    return this.httpClient.post<Order>(this.baseUrl + "orders", order);
  }

}
