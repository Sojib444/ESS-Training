import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomerService } from '../../services/customer/customer-service';
import { SuccessMessage } from "../../message/success-message/success-message";
import { ErrorMessage } from "../../message/error-message/error-message";
import { CoustomerType } from '../../model/customer/customerTypes';
import { Hobies } from '../../model/demoData/hobies';
import { Country } from '../../model/demoData/countries';

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
  customerTypes = Object.values(CoustomerType);
  countries = Object.values(Country);
  hobbiList: string[] = Hobies;
  selectedHobbies: string[] = [];
  selectedCountries: number[] = [];


  ngOnInit(): void {
    this.customerForm = new FormGroup({
      email: new FormControl('', Validators.required),
      name: new FormControl(''),
      address: new FormControl(''),
      phoneNumber: new FormControl('', Validators.required),
      customerTypeId: new FormControl(0, Validators.required),
      gender: new FormControl(null, Validators.required),
      hobbies: new FormControl([]),
      countryCodes: new FormControl([]),
    })

    console.log(this.countries);
    console.log(this.customerTypes);
  }

  toggleHobby(hobby: string, $event: Event) {

    const isChecked = ($event.target as HTMLInputElement).checked;
    if (!isChecked)
      this.selectedHobbies = this.selectedHobbies.filter(h => h !== hobby);
    else
      this.selectedHobbies.push(hobby);

    this.customerForm.patchValue({
      hobbies: this.selectedHobbies
    });
  }

  selectCoutry(country:number, $event: Event)
  {
    const isChecked = ($event.target as HTMLInputElement).checked;
    if (!isChecked)
      this.selectedCountries = this.selectedCountries.filter(h => h !== country);
    else
      this.selectedCountries.push(country);

    this.customerForm.patchValue({
      countryCodes: this.selectedCountries
    });
  }

  onSubmit() {

    if (this.customerForm.invalid) {
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
        
        this.customerForm.reset({
          customerTypeId: 0
        });
        this.selectedHobbies = [];
        this.selectedCountries = [];
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
