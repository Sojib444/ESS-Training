import { Component, HostListener } from '@angular/core';
import { Submenu } from "./submenu/submenu";

@Component({
  selector: 'app-header',
  imports: [Submenu],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  public subMenuVisible: boolean = false;

  onSubMenuTriger(){
    this.subMenuVisible = !this.subMenuVisible;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    const mq = window.matchMedia('(min-width: 796px)'); // change your breakpoint
    if (mq.matches) {
      this.subMenuVisible = false;
    }
  }
}
