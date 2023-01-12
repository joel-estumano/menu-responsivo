import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';
import { MenuDisplayService } from './menu-display.service';
import { MenuVisivelService } from './menu-visivel.service';

@Component({
  selector: 'app-menu-responsivo',
  templateUrl: './menu-responsivo.component.html',
  styleUrls: ['./menu-responsivo.component.css'],
})
export class MenuResponsivoComponent implements OnInit {
  private open: boolean = true;

  @HostListener('window:load', ['$event'])
  @HostListener('window:scroll', ['$event'])
  @HostListener('window:resize', ['$event'])
  onWindowScroll(event?: any) {
    if (this.elementRef.nativeElement.offsetParent?.className) {
      console.log('não existia parent');
      this.menuVisivelService.setVisivel(true);
    } else {
      console.log('existia parent');
      this.menuVisivelService.setVisivel(false);
    }
  }

  constructor(
    private menuDisplayService: MenuDisplayService,
    private menuVisivelService: MenuVisivelService,
    private elementRef: ElementRef,
    private renderer2: Renderer2
  ) {
    this.menuDisplayService.getSource().subscribe((menuControle) => {
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
