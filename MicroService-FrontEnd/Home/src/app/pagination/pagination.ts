import { Component, inject, input, OnInit, output } from '@angular/core';
import { CustomerService } from '../services/customer/customer-service';

@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.html',
  styleUrl: './pagination.css'
})
export class Pagination implements OnInit {
  currentPage = 0;
  currentPageOutPut = output<number>();
  allItems = input.required<number>();
  totalPages = 0
  customerService = inject(CustomerService)
  pages: number[] = [];

  ngOnInit() {
    this.totalPages = this.allItems() / 5;
    console.log(this.totalPages)
  }


  prevPage() {
    // if (this.currentPage > 1) {
    //   this.currentPage--;
    //   this.goToPage(this.currentPage);
    // }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.currentPageOutPut.emit(this.currentPage)
    }
  }
}
