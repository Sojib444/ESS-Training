import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { url } from '../../config/config';

@Injectable({
  providedIn: 'root',
})
// export class CustomerService {

//    customers = signal<Customer[]>([]);
//    constructor(public client: HttpClient) { }

//    addCustomer(customer: Customer)
//    {
//       return this.client.post<Customer>(url + 'customers', customer);
//    }

//    getCustomerList()
//    {
//       return this.client.get<Customer[]>(url + 'customers');
//    }

//    deleteCustomer(id: string)
//    {
//       return this.client.delete<void>(url + 'customers/' + id);
//    }

//    updateCustomer(id: string, customer: Customer)
//    {

//       console.log(customer);
//       return this.client.put<Customer>(url + 'customers/' + id, customer);
//    }
// }
export class CustomerService {
  customers = signal<Customer[]>([]);

  constructor(private http: HttpClient) {}

  loadCustomers() {
    return this.http.get<Customer[]>(url + 'customers/');
  }

  addCustomer(customer: Customer) {
    return this.http.post<Customer>(url + 'customers/', customer);
  }

  updateCustomer(id: string, customer: Customer) {
    return this.http.put<Customer>(url + 'customers/' + id, customer);
  }

  deleteCustomer(id: string) {
    return this.http.delete(url + 'customers/' + id);
  }
}