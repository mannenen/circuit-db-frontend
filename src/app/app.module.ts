// angular "core" imports
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// angular material imports
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import { MatInputModule } from "@angular/material/input";
import { MatSliderModule } from "@angular/material/slider";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatAutocompleteModule } from "@angular/material/autocomplete";

// app components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CircuitListComponent } from './components/circuit-list/circuit-list.component';
import { SnackBarErrorHandler } from "./error-handler";
import { CircuitEntryComponent } from './components/circuit-entry/circuit-entry.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CircuitDetailComponent } from './components/circuit-detail/circuit-detail.component';
import { CustomerEntryComponent } from './components/customer-entry/customer-entry.component';


@NgModule({
  declarations: [
    AppComponent,
    CircuitListComponent,
    CircuitEntryComponent,
    CustomerListComponent,
    CircuitDetailComponent,
    CustomerEntryComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MatCardModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatSliderModule,
    AppRoutingModule,
    MatDividerModule,
    HttpClientModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: SnackBarErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
