import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { MenuControleService } from './menu-controle.service';

@Component({
  selector: 'app-menu-responsivo',
  templateUrl: './menu-responsivo.component.html',
  styleUrls: ['./menu-responsivo.component.css'],
})
export class MenuResponsivoComponent implements AfterViewInit {
  @ViewChild('menu') menu: ElementRef = {} as ElementRef;
  private readonly menuClassico = 'd-flex app-menu-responsivo p-4';
  private readonly menuOffcanvas = 'd-flex offcanvas-collapse open p-4';

  private open: boolean = true;

  @HostListener('window:load', ['$event'])
  @HostListener('window:scroll', ['$event'])
  @HostListener('window:resize', ['$event'])
  onWindowScroll(event?: any) {
    if (this.elementRef.nativeElement.offsetParent?.className) {
      console.log('não existia parent');
      this.mControlService.setVisivel(true);
    } else {
      console.log('existia parent');
      this.mControlService.setVisivel(false);
    }
  }

  constructor(
    private mControlService: MenuControleService,
    private elementRef: ElementRef,
    private renderer2: Renderer2
  ) {}
  ngAfterViewInit(): void {
    this.mControlService.getSourceMenuOpen().subscribe((isOpen) => {
      this.open = isOpen;

      if (this.open) {
        /*  this.menuClassico.split(' ').forEach((className: string) => {
          this.renderer2.removeClass(this.menu.nativeElement, className);
        }); */
        this.menuClassico.split(' ').forEach((className: string) => {
          this.renderer2.addClass(this.menu.nativeElement, className);
        });
      } else {
        this.menuClassico.split(' ').forEach((className: string) => {
          this.renderer2.removeClass(this.menu.nativeElement, className);
        });
        /*  this.menuClassico.split(' ').forEach((className: string) => {
          this.renderer2.addClass(this.menu.nativeElement, className);
        }); */
      }
    });
  }
}

//  this.renderer2.setAttribute(this.menu.nativeElement, 'class', 'd-flex app-menu-responsivo p-4');
// && this.elementRef.nativeElement.offsetParent?.className
