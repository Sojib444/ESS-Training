import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from '../../config/config';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(public client: HttpClient) { }

   addCustomer(customer: CustomerWriter)
   {
      return this.client.post<CustomerWriter>(url + 'customers', customer);
   }

   getCustomerList()
   {
      return this.client.get<CustomerReader[]>(url + 'customers');
   }
}
