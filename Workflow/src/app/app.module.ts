import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Page2Component } from './page2/page2.component';
import { CanvasCompComponent } from './canvas-comp/canvas-comp.component';
import { NavbarcompComponent } from './navbarcomp/navbarcomp.component';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import {MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import {fabric} from 'fabric';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { DragDropModule} from '@angular/cdk/drag-drop';
import { Serv1Service } from './services/serv1.service';
import { AlertController } from '@ionic/angular';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
// import {saveAs} from 'file-saver';

const firebaseConfig = {
  apiKey: "AIzaSyD4ygIa3XUMhhPsJY6f8clbtmAGu88TbgI",
  authDomain: "workflow-project-12688.firebaseapp.com",
  projectId: "workflow-project-12688",
  storageBucket: "workflow-project-12688.appspot.com",
  messagingSenderId: "622661221350",
  appId: "1:622661221350:web:85676c86c93bc83564b427"
};

@NgModule({
  declarations: [AppComponent,Page2Component,NavbarcompComponent,CanvasCompComponent],
  imports: [
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    DragDropModule,
    FormsModule,
    MatIconModule,
    MatMenuModule,
    DropDownListModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    CdkDrag],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },Serv1Service,AlertController],
  bootstrap: [AppComponent],
})
export class AppModule {}
