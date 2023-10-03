import { Component, HostListener, Renderer2, ElementRef } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  isMenuOpen: boolean = false;
  isScreenSmall!: boolean;

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  checkScreenSize() {
    this.isScreenSmall = window.innerWidth < 768;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkScreenSize();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  ngOnInit() {
    this.checkScreenSize();
  }
}
