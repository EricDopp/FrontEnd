import { Component } from '@angular/core';
import { Order } from 'src/app/models/order';
import { RestaurantFavesService } from 'src/app/services/restaurant-faves.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']

})
export class OrderHistoryComponent {
  constructor(private restaurantfaves:RestaurantFavesService) {}
  order:Order[]=[]
  ngOnInit(){
    this.restaurantfaves.getAllOrders()
      .subscribe(orders => {
        this.order= orders;
      });
  }
}
