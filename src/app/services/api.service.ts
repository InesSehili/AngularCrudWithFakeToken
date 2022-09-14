import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable()

export class ApiService {
  constructor(private http : HttpClient) {
  }

  AddProduct(data: any){
      return this.http.post<any>(`${environment.apiUrl}/products`,data);
  }
  getProducts() {
    return this.http.get<any>(`${environment.apiUrl}/products`);
  }
  updateProduct(data : any, id : number)
  {
    return this.http.put<any>(`${environment.apiUrl}/products/${id}`,data);
  }

  deleteProduct(id : number) {
    return this.http.delete<any>(`${environment.apiUrl}/products/${id}`);
  }
}
