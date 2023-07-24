import {Injectable} from "@angular/core";
import {Product} from "./product.model";
import {StaticDataSource} from "./static.datasource";

@Injectable()
export class ProductRepository {

  private products: Product[] = [];
  private categories: string[] = [];

  constructor(private dataSource: StaticDataSource) {
    dataSource.getProducts().subscribe(data => {
      this.products = data;
      this.categories = data
        .map(p => p.category)
        // https://ru.stackoverflow.com/questions/807662/%D0%9D%D0%B5-%D0%BF%D0%BE%D0%BD%D1%8F%D1%82%D0%BD%D0%B0-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0-%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8-%D1%84%D0%B8%D0%BB%D1%8C%D1%82%D1%80%D0%B0%D1%86%D0%B8%D0%B8-%D0%B2-typescript
        .filter((c, index, array) => array.indexOf(c) == index)
        .sort();
    });
  }

  getProducts(category: string | null = null): Product[] {
    return this.products
      .filter(p => category == null || category == p.category);
  }

  getProduct(id: number): Product {
    return this.products.find(p => p.id == id);
  }

  getCategories(): string[] {
    return this.categories;
  }

}
