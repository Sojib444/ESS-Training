import { Component, inject, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer/customer-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer-list',
  imports: [FormsModule],
  templateUrl: './customer-list.html',
  styleUrl: './customer-list.css'
})
export class CustomerList implements OnInit {

  coustomerService = inject(CustomerService);
  customerList = this.coustomerService.customers;
  editedCustomer : Customer | null = null;
  editingId: string | null = null;

  ngOnInit(): void {
    this.coustomerService.loadCustomers().subscribe({
      next: (data) => {
        console.log(data);
        this.customerList.set(data);
      },
      error: (err) => console.error('Failed to load customers:', err)
    });
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
      this.editedCustomer = { ...customer };
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
        this.editedCustomer = null;
        this.editingId = null;
      },
      error: (error) => {
        console.error('Error updating customer:', error);
      }
    });
  }
}