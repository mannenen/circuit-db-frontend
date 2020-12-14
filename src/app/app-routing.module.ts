import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CircuitListComponent } from './components/circuit-list/circuit-list.component';
import { CircuitDetailComponent } from './components/circuit-detail/circuit-detail.component';
import { CircuitEntryComponent } from './components/circuit-entry/circuit-entry.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerEntryComponent } from './components/customer-entry/customer-entry.component';

const appRoutes: Routes = [
  { path: "circuits", component: CircuitListComponent },
  { path: "circuit/:cid", component: CircuitDetailComponent },
  { path: "circuits/new", component: CircuitEntryComponent },
  { path: "", redirectTo: "circuits", pathMatch: "full" }
];

const debugRoutes: Routes = [
  { path: "debug/circuit-list", component: CircuitListComponent },
  { path: "debug/circuit-detail", component: CircuitDetailComponent },
  { path: "debug/circuit-entry", component: CircuitEntryComponent },
  { path: "debug/customer-list", component: CustomerListComponent },
  { path: "debug/customer-entry", component: CustomerEntryComponent }
];

const routes: Routes = [
  ...appRoutes, 
  ...debugRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
