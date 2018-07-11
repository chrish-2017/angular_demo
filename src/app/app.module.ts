import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PanelMenuModule } from 'primeng/primeng';
import { DataTableModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { EditorModule } from 'primeng/primeng';
import { ConfirmDialogModule } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import { TreeModule } from 'primeng/primeng';
import { CalendarModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { ChartModule } from 'primeng/primeng';

import { IndexRoutingModule } from './index/index-routing.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { TypeComponent } from './type/type.component';
import { GoodsAddComponent } from './goods/add/goods-add.component';
import { GoodsListComponent } from './goods/list/goods-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    HomeComponent,
    TypeComponent,
    GoodsAddComponent,
    GoodsListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    IndexRoutingModule,
    AppRoutingModule,
    PanelMenuModule,
    DataTableModule,
    ButtonModule,
    EditorModule,
    ConfirmDialogModule,
    DialogModule,
    TreeModule,
    CalendarModule,
    InputTextModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
