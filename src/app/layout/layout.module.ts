import { NgModule } from '@angular/core';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuResponsivoComponent } from './components/menu-responsivo/menu-responsivo.component';
import { ConteudoComponent } from './components/conteudo/conteudo.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuResponsivoService } from './components/menu-responsivo/menu-responsivo.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    MenuResponsivoComponent,
    ConteudoComponent,
    FooterComponent,
  ],
  imports: [
    LayoutRoutingModule,
    CommonModule      
  ],
  providers: [MenuResponsivoService]
})
export class LayoutModule { }