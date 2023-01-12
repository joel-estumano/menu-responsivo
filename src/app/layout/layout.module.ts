import { NgModule } from '@angular/core';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuResponsivoComponent } from './components/menu-responsivo/menu-responsivo.component';
import { ConteudoComponent } from './components/conteudo/conteudo.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { MenuControleService } from './components/menu-responsivo/menu-controle.service';

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
  providers: [MenuControleService]
})
export class LayoutModule { }