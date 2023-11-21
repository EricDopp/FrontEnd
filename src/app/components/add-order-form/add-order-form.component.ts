import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Order } from 'src/app/models/order';
import { OrderForm } from 'src/app/models/orderform';
import { RestaurantFavesService } from 'src/app/services/restaurant-faves.service';

@Component({
  selector: 'app-add-order-form',
  templateUrl: './add-order-form.component.html',
  styleUrls: ['./add-order-form.component.css']
})
export class AddOrderFormComponent{
  orderForm=this.fb.group({
    restaurant:["",Validators.required],
    description:["",Validators.required],
    rating:[0,Validators.required],
    orderAgain:["",Validators.required]


  })
  constructor(private fb:FormBuilder, private resturantfavesService:RestaurantFavesService){}
  orders:Order[]=[];
  ngOnInit(){
    this.resturantfavesService.getAllOrders().subscribe(orders=>this.orders=orders)
  }
  onSubmit(){
    if (this.orderForm.valid){
      const formdata:OrderForm=this.orderForm.getRawValue()as unknown as OrderForm;

    }

  }
}


