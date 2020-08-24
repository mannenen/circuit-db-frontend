import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CircuitListComponent } from './components/circuit-list/circuit-list.component';
import { CircuitDetailComponent } from './components/circuit-detail/circuit-detail.component';
import { CircuitEntryComponent } from './components/circuit-entry/circuit-entry.component';

const routes: Routes = [
  { path: "circuits", component: CircuitListComponent },
  { path: "circuit/:id", component: CircuitDetailComponent },
  { path: "circuits/new", component: CircuitEntryComponent },
  { path: "", redirectTo: "circuits", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
