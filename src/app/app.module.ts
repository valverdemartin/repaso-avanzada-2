import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './components/Category/add/add.component';
import { ListComponent } from './components/Category/list/list.component';
import { RemoveComponent } from './components/Category/remove/remove.component';
import { EditComponent } from './components/Category/edit/edit.component';
import { ProductsService } from './services/products.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ListComponent,
    RemoveComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
