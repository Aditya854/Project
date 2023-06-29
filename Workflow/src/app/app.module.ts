import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Page2Component } from './page2/page2.component';
import { NavbarcompComponent } from './navbarcomp/navbarcomp.component';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import {MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AppComponent,Page2Component,NavbarcompComponent],
  imports: [FormsModule,MatIconModule,MatMenuModule,DropDownListModule,BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
