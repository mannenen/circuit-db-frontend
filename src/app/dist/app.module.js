"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
// angular "core" imports
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var animations_1 = require("@angular/platform-browser/animations");
var forms_1 = require("@angular/forms");
// angular material imports
var card_1 = require("@angular/material/card");
var table_1 = require("@angular/material/table");
var input_1 = require("@angular/material/input");
var slider_1 = require("@angular/material/slider");
var button_1 = require("@angular/material/button");
var divider_1 = require("@angular/material/divider");
var snack_bar_1 = require("@angular/material/snack-bar");
var form_field_1 = require("@angular/material/form-field");
var paginator_1 = require("@angular/material/paginator");
var autocomplete_1 = require("@angular/material/autocomplete");
// app components
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app-routing.module");
var circuit_list_component_1 = require("./components/circuit-list/circuit-list.component");
var error_handler_1 = require("./error-handler");
var circuit_entry_component_1 = require("./components/circuit-entry/circuit-entry.component");
var customer_list_component_1 = require("./components/customer-list/customer-list.component");
var circuit_detail_component_1 = require("./components/circuit-detail/circuit-detail.component");
var customer_entry_component_1 = require("./components/customer-entry/customer-entry.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                circuit_list_component_1.CircuitListComponent,
                circuit_entry_component_1.CircuitEntryComponent,
                customer_list_component_1.CustomerListComponent,
                circuit_detail_component_1.CircuitDetailComponent,
                customer_entry_component_1.CustomerEntryComponent
            ],
            imports: [
                forms_1.FormsModule,
                platform_browser_1.BrowserModule,
                card_1.MatCardModule,
                table_1.MatTableModule,
                input_1.MatInputModule,
                button_1.MatButtonModule,
                slider_1.MatSliderModule,
                app_routing_module_1.AppRoutingModule,
                divider_1.MatDividerModule,
                http_1.HttpClientModule,
                snack_bar_1.MatSnackBarModule,
                paginator_1.MatPaginatorModule,
                form_field_1.MatFormFieldModule,
                forms_1.ReactiveFormsModule,
                autocomplete_1.MatAutocompleteModule,
                animations_1.BrowserAnimationsModule
            ],
            providers: [
                { provide: core_1.ErrorHandler, useClass: error_handler_1.SnackBarErrorHandler }
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
