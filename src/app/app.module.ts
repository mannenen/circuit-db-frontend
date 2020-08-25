// angular "core" imports
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// angular material imports
import { MatSliderModule } from "@angular/material/slider";
import { MatTableModule } from "@angular/material/table";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatAutocompleteModule } from "@angular/material/autocomplete";

// app components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CircuitListComponent } from './components/circuit-list/circuit-list.component';
import { CircuitDetailComponent } from './components/circuit-detail/circuit-detail.component';
import { CircuitEntryComponent } from './components/circuit-entry/circuit-entry.component';
import { SnackBarErrorHandler } from "./error-handler";
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerEntryComponent } from './components/customer-entry/customer-entry.component';


@NgModule({
  declarations: [
    AppComponent,
    CircuitListComponent,
    CircuitDetailComponent,
    CircuitEntryComponent,
    CustomerListComponent,
    CustomerEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatAutocompleteModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: SnackBarErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
