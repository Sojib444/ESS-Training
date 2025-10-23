import { Component, effect, inject, input, OnInit, signal } from '@angular/core';
import { CustomerService } from '../../services/customer/customer-service';
import { FormsModule } from '@angular/forms';
import { CoustomerType } from '../../model/customer/customerTypes';
import { Hobies } from '../../model/demoData/hobies';
import { Country } from '../../model/demoData/countries';
import { concatAll } from 'rxjs';
import { RedirectCommand } from '@angular/router';
import { Pagination } from "../../pagination/pagination";

@Component({
  selector: 'app-customer-list',
  imports: [FormsModule, Pagination],
  templateUrl: './customer-list.html',
  styleUrl: './customer-list.css'
})
export class CustomerList implements OnInit {

  coustomerService = inject(CustomerService);
  customerList = this.coustomerService.customers;
  editedCustomer  = signal<Customer | null>(null);
  editingId: string | null = null;
  customerTypes = Object.values(CoustomerType);
  hobbis = Object.values(Hobies);
  countries = Object.values(Country);

  currentPage = 0;

  ngOnInit(): void {
    this.coustomerService.loadCustomers().subscribe({
      next: (data) => {
        console.log(data);
        this.customerList.set(data);
      },
      error: (err) => console.error('Failed to load customers:', err)
    });
  }

  toggleHobby(hobby:string, $event: Event)
  {
    const isChecked = ($event.target as HTMLInputElement).checked;
    if (!isChecked)
      this.editedCustomer()!.hobbies =  this.editedCustomer()?.hobbies.filter(h => h !== hobby) as string[];
    else
      this.editedCustomer()!.hobbies.push(hobby);
  }



  onDelete(id: string)
  {
    this.coustomerService.deleteCustomer(id).subscribe({
      next: () => {
        this.customerList.update(list => list.filter(c => c.id !== id));
      }
    });
  }

  onUpdate(id: string) {
    const customer = this.customerList().find(c => c.id === id);
    if (customer) {
      // clone object to edit
      this.editedCustomer.set({ ...customer });
      this.editingId = id;
    }
  }

  updateSave(id: string, editedCustomer: Customer)
  {
    console.log(editedCustomer);
    if (!editedCustomer?.id) return;

    this.coustomerService.updateCustomer(id, editedCustomer).subscribe({
      next: (data) => {
        this.customerList.update(list => list.map(c => c.id === id ? editedCustomer : c));
        this.editedCustomer.set(null);
        this.editingId = null;
      },
      error: (error) => {
        console.error('Error updating customer:', error);
      }
    });
  }

  onUpdateCancel()
  {
    this.editedCustomer.set(null);
    this.editingId = null;
  }

  receiveCurrentPage(currentpage :number)
  {
    this.currentPage = currentpage;
  }
}

