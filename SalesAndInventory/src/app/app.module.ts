import { NgModule, forwardRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { SideNavComponent } from './home/side-nav/side-nav.component';


import { SalesComponent } from './Report/sales/sales.component';
import { InventoryComponent } from './Report/inventory/inventory.component';
import { InvoiceComponent } from './Report/invoice/invoice.component';
import { CustomerComponent } from './Report/customer/customer.component';
import { UserListComponent } from './UserManagement/user-list/user-list.component';
import { UserFormComponent } from './UserManagement/user-form/user-form.component';
import { SupplierComponent } from './Report/supplier/supplier.component';
import { PurchaseFormComponent } from './purchase/purchase-create/purchase-form.component';
import { PurchaseListComponent } from './purchase/purchase-list/purchase-list.component';
import { SalesFormComponent } from './sales/sales-form/sales-form.component';
import { SalesListComponent } from './sales/sales-list/sales-list.component';
import { FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignUpComponent } from './loginOption/sign-up/sign-up.component';
import { SignInComponent } from './loginOption/sign-in/sign-in.component';
import { CreateComponent } from './product/create/create.component';
import { ViewComponent } from './product/view/view.component';
import { ListComponent } from './product/list/list.component';
import { EditComponent } from './product/edit/edit.component';
import { PurchaseEditComponent } from './purchase/purchase-edit/purchase-edit.component';
import { PurchaseViewComponent } from './purchase/purchase-view/purchase-view.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { SalesEditComponent } from './sales/sales-edit/sales-edit.component';
import { SalesViewComponent } from './sales/sales-view/sales-view.component';
import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerViewComponent } from './customer/customer-view/customer-view.component';

import { SupplierCreateComponent } from './supplier/supplier-create/supplier-create.component';
import { SupplierEditComponent } from './supplier/supplier-edit/supplier-edit.component';
import { SupplierViewComponent } from './supplier/supplier-view/supplier-view.component';
import { SupplierListComponent } from './supplier/supplier-list/supplier-list.component';
import { CatagoryListComponent } from './catagory/catagory-list/catagory-list.component';
import { CatagoryCreateComponent } from './catagory/catagory-create/catagory-create.component';
import { CatagoryEditComponent } from './catagory/catagory-edit/catagory-edit.component';
import { CatagoryViewComponent } from './catagory/catagory-view/catagory-view.component';
import { SubCatagoryCreateComponent } from './sub-catagory/sub-catagory-create/sub-catagory-create.component';
import { SubCatagoryListComponent } from './sub-catagory/sub-catagory-list/sub-catagory-list.component';
import { SubCatagoryEditComponent } from './sub-catagory/sub-catagory-edit/sub-catagory-edit.component';
import { SubCatagoryViewComponent } from './sub-catagory/sub-catagory-view/sub-catagory-view.component';
import { MainDisplayComponent } from './home/main-display/main-display.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SideNavComponent,
    HomeComponent,
    SalesComponent,
    UserListComponent,
    SalesComponent,
    InventoryComponent,
    InvoiceComponent,
    CustomerComponent,
    UserListComponent,
    UserFormComponent,
    SupplierComponent,  
    PurchaseFormComponent,
    PurchaseListComponent,
    SalesFormComponent,
    SalesListComponent,
    
    SignUpComponent,
    SignInComponent,
    CreateComponent,
    ViewComponent,
    ListComponent,
    EditComponent,
    PurchaseEditComponent,
    PurchaseViewComponent,
    DashbordComponent,
    SalesEditComponent,
    SalesViewComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    CustomerListComponent,
    CustomerViewComponent,
    
    SupplierCreateComponent,
    SupplierEditComponent,
    SupplierViewComponent,
    SupplierListComponent,
    CatagoryListComponent,
    CatagoryCreateComponent,
    CatagoryEditComponent,
    CatagoryViewComponent,
    SubCatagoryCreateComponent,
    SubCatagoryListComponent,
    SubCatagoryEditComponent,
    SubCatagoryViewComponent,
    MainDisplayComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>NG_VALUE_ACCESSOR),
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
