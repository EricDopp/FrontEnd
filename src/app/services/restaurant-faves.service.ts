import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class RestaurantFavesService {

  constructor(private client:HttpClient) { }

  apiUrl:string = 'http://localhost:8080/orders';

  getAllOrders():Observable<Order[]> {
    return this.client.get<Order[]>(this.apiUrl);
  }

  getOrderById(id:number):Observable<Order>{
    return this.client.get<Order>(`${this.apiUrl}/${id}`);
  }

  createOrder(order: Order):Observable<Order>{
    return this.client.post<Order>(this.apiUrl, order);
  }

  updateOrder(id:number, order: Order):Observable<Order>{
    return this.client.put<Order>(`${this.apiUrl}/${id}`, order);
  }

  deleteOrder(id:number){
    return this.client.delete(`${this.apiUrl}/${id}`);
  }
}
