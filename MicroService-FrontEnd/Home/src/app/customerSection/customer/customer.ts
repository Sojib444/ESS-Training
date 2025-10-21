import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomerService } from '../../services/customer/customer-service';
import { SuccessMessage } from "../../message/success-message/success-message";
import { ErrorMessage } from "../../message/error-message/error-message";

@Component({
  selector: 'app-customer',
  imports: [ReactiveFormsModule, SuccessMessage, ErrorMessage],
  templateUrl: './customer.html',
  styleUrl: './customer.css'
})
export class Customer implements OnInit {
  customerForm!: FormGroup;
  customerService = inject(CustomerService);
  customerAddedMessage = 'Customer added successfully!';
  customerErrorMessage = 'An error occurred while adding the customer.';
  popUpSuccessMessage: boolean = false;
  popUpErrorMessage: boolean = false;

  
  ngOnInit(): void {
    this.customerForm = new FormGroup({
      email: new FormControl('',Validators.required),
      name: new FormControl(''),
      address: new FormControl(''),
      phoneNumber: new FormControl('',Validators.required),
    })
  }

  onSubmit()
  {
    if(this.customerForm.invalid)
    {
      return;
    }

    this.customerService.addCustomer(this.customerForm.value).subscribe({
      next: (data) => {
        this.customerForm.value.id = data.id;
        this.customerService.customers.set([...this.customerService.customers(), this.customerForm.value]);        
        this.popUpSuccessMessage = true;
        setTimeout(() => {
          this.popUpSuccessMessage = false;
        }, 2000);
        this.customerForm.reset();
      },
      error: (error) => {
        this.popUpErrorMessage = true;
        this.customerErrorMessage = error.detail || this.customerErrorMessage;
        setTimeout(() => {
          this.popUpErrorMessage = false;
        }, 2000);
      }
    })
  }
}
