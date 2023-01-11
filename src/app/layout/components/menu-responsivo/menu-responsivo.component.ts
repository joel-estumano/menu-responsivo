import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';
import { MenuResponsivoService } from './menu-responsivo.service';

@Component({
  selector: 'app-menu-responsivo',
  templateUrl: './menu-responsivo.component.html',
  styleUrls: ['./menu-responsivo.component.css'],
})
export class MenuResponsivoComponent implements OnInit {
  private open: boolean = false;

  @HostListener('window:load', ['$event'])
  @HostListener('window:scroll', ['$event'])
  @HostListener('window:resize', ['$event'])
  onWindowEvent(event?: any) {
    if (event) {
      if (this.elementRef.nativeElement.offsetParent?.className && !this.open) {
        this.menuResponsivoService.setOpen(true);
      }
      if(!this.elementRef.nativeElement.offsetParent?.className && this.open){
        this.menuResponsivoService.setOpen(false);
      }
    }
  }

  constructor(
    private readonly menuResponsivoService: MenuResponsivoService,
    private elementRef: ElementRef,
    private renderer2: Renderer2
  ) {
    this.menuResponsivoService.getSource().subscribe((isOpen) => {
      this.open = isOpen;

     /*  if (isOpen) {
        this.renderer2.removeClass(this.elementRef.nativeElement, 'd-none');
        this.renderer2.addClass(this.elementRef.nativeElement, 'd-flex');
      } else {
        this.renderer2.removeClass(this.elementRef.nativeElement, 'd-flex');
        this.renderer2.addClass(this.elementRef.nativeElement, 'd-none');
      } */
    });
  }
  
  ngOnInit(): void {}
}
