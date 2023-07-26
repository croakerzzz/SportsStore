import {Injectable} from "@angular/core";
import {map, Observable} from "rxjs";
import {Product} from "./product.model";
import {Order} from "./order.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";

const PROTOCOL = "http";
const PORT = 3500;

interface LoginResponse {
  success: boolean,
  token: string
}

// @ts-ignore
@Injectable()
export class RestDataSource {
  baseUrl: string;
  auth_token: string | null | undefined;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }

  authenticate(user: string, pass: string): Observable<boolean> {
    return this.httpClient.post<LoginResponse>(this.baseUrl + "login", {name: user, password: pass})
      .pipe(map(response => {
        this.auth_token = response.success ? response.token : null;
        return response.success;
      }));
  }

  getProducts(): Observable<Product[]> {
    const headers = new HttpHeaders();
    headers.append('Authorization', 'Bearer<${this.auth_token}>')
    return this.httpClient.get<Product[]>(this.baseUrl + "products", {headers});
  }

  saveOrder(order: Order): Observable<Order> {
    const headers = new HttpHeaders();
    headers.append('Authorization', 'Bearer<${this.auth_token}>')
    return this.httpClient.post<Order>(this.baseUrl + "orders", order, {headers});
  }

}
