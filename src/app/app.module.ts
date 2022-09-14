import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatDialogModule} from "@angular/material/dialog";
import { AddDialogModelComponent } from './add-dialog-model/add-dialog-model.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatRadioModule} from "@angular/material/radio";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ApiService} from "./services/api.service";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";

import { SignupComponent } from './signup/signup.component';
import { ListProductComponent } from './list-product/list-product.component';
import {MatCardModule} from "@angular/material/card";
import {FlexLayoutModule} from "@angular/flex-layout";
import { HeaderComponent } from './header/header.component';
import {AuthModule} from "./auth/auth.module";
import {LoginComponent} from "./auth/components/login/login.component";

@NgModule({
  declarations: [
    AppComponent,
    AddDialogModelComponent,
    AddDialogModelComponent,
    SignupComponent,
    ListProductComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    FlexLayoutModule,
    AuthModule

  ],


  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
