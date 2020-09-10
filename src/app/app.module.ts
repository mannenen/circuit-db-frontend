// angular "core" imports
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// angular material imports
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";
import { MatInputModule } from "@angular/material/input";
import { MatSliderModule } from "@angular/material/slider";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatAutocompleteModule } from "@angular/material/autocomplete";

// app components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SnackBarErrorHandler } from "./error-handler";
import { CircuitListComponent } from './components/circuit-list/circuit-list.component';
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
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatSliderModule,
    AppRoutingModule,
    MatDividerModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    BrowserAnimationsModule
  ],
  providers: [
    // { provide: ErrorHandler, useClass: SnackBarErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
