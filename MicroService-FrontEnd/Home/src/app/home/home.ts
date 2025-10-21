import { Component, effect } from '@angular/core';
import { Header } from "../header/header";
import { Customer } from "../customerSection/customer/customer";
import { CustomerList } from "../customerSection/customer-list/customer-list";

@Component({
  selector: 'app-home',
  imports: [Header, Customer, CustomerList],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
