import { Component, inject, input, OnInit, output } from '@angular/core';
import { CustomerService } from '../services/customer/customer-service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.html',
  styleUrl: './pagination.css'
})
export class Pagination {
  currentPage = 1;
  currentPageOutPut = output<number>();
  allItems = input.required<number>();
  totalPages = input.required<number>();
  customerService = inject(CustomerService)

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;  
      this.currentPageOutPut.emit(this.currentPage)
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages()) {
      this.currentPage++;
      this.currentPageOutPut.emit(this.currentPage)
    }
  }
}
