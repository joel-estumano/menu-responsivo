import {
  Component,
  ElementRef,
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

  constructor(
    private readonly menuResponsivoService: MenuResponsivoService,
    private elementRef: ElementRef,
    private renderer2: Renderer2
  ) {
    this.menuResponsivoService.getSource().subscribe((menuControle) => {
      this.open = menuControle.existe();

      if (this.open) {
        this.renderer2.removeClass(this.elementRef.nativeElement, 'd-none');
        this.renderer2.addClass(this.elementRef.nativeElement, 'd-flex');
      } else {
        this.renderer2.removeClass(this.elementRef.nativeElement, 'd-flex');
        this.renderer2.addClass(this.elementRef.nativeElement, 'd-none');
        // && this.elementRef.nativeElement.offsetParent?.className
      }
    });
  }

  ngOnInit(): void {}
}
