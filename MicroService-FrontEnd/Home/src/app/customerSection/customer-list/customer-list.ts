import { Component, inject, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer/customer-service';

@Component({
  selector: 'app-customer-list',
  imports: [],
  templateUrl: './customer-list.html',
  styleUrl: './customer-list.css'
})
export class CustomerList implements OnInit {
  coustomerService = inject(CustomerService);
  customerList: CustomerReader[] = [];

  ngOnInit(): void {
    this.coustomerService.getCustomerList().subscribe({
      next: (data) => {
        this.customerList = data;
      },
      error: (error) => {
        console.error('Error fetching customer list:', error);
      }
    })
  }
}
