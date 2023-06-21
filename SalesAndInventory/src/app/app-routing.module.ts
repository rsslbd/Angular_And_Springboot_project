import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './loginOption/sign-in/sign-in.component';
import { SignUpComponent } from './loginOption/sign-up/sign-up.component';
import { PurchaseFormComponent } from './purchase/purchase-create/purchase-form.component';
import { PurchaseListComponent } from './purchase/purchase-list/purchase-list.component';
import { CreateComponent } from './product/create/create.component';
import { EditComponent } from './product/edit/edit.component';
import { ListComponent } from './product/list/list.component';
import { ViewComponent } from './product/view/view.component';
import { PurchaseViewComponent } from './purchase/purchase-view/purchase-view.component';
import { PurchaseEditComponent } from './purchase/purchase-edit/purchase-edit.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { SalesFormComponent } from './sales/sales-form/sales-form.component';
import { SalesEditComponent } from './sales/sales-edit/sales-edit.component';
import { SalesListComponent } from './sales/sales-list/sales-list.component';
import { SalesViewComponent } from './sales/sales-view/sales-view.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerViewComponent } from './customer/customer-view/customer-view.component';
import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import { SupplierCreateComponent } from './supplier/supplier-create/supplier-create.component';
import { SupplierEditComponent } from './supplier/supplier-edit/supplier-edit.component';
import { SupplierListComponent } from './supplier/supplier-list/supplier-list.component';
import { SupplierViewComponent } from './supplier/supplier-view/supplier-view.component';
import { CatagoryCreateComponent } from './catagory/catagory-create/catagory-create.component';
import { CatagoryEditComponent } from './catagory/catagory-edit/catagory-edit.component';
import { SubCatagoryCreateComponent } from './sub-catagory/sub-catagory-create/sub-catagory-create.component';
import { SubCatagoryEditComponent } from './sub-catagory/sub-catagory-edit/sub-catagory-edit.component';
import { SubCatagoryViewComponent } from './sub-catagory/sub-catagory-view/sub-catagory-view.component';
import { SubCatagoryListComponent } from './sub-catagory/sub-catagory-list/sub-catagory-list.component';
import { CatagoryViewComponent } from './catagory/catagory-view/catagory-view.component';
import { CatagoryListComponent } from './catagory/catagory-list/catagory-list.component';

const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'home', component: HomeComponent, children: [
    { path: '', component: DashbordComponent },
    { path: 'dashboard', component: DashbordComponent },

    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'list', component: ListComponent },

    { path: ':postId/view', component: ViewComponent },
    { path: 'create', component: CreateComponent },
    { path: ':postId/edit', component: EditComponent } ,
  { path: 'purchase-create', component: PurchaseFormComponent },
  { path: 'purchase-list', component: PurchaseListComponent },
  { path: ':postId/purchase-view', component: PurchaseViewComponent },
  { path: ':postId/purchase-edit', component: PurchaseEditComponent },
  { path: 'sales-create', component: SalesFormComponent },
  { path: 'sales-list', component: SalesListComponent },
  { path: ':postId/sales-view', component: SalesViewComponent },
  { path: ':postId/sales-edit', component: SalesEditComponent },
  { path: 'customer-create', component: CustomerCreateComponent },
  { path: 'customer-list', component: CustomerListComponent },
  { path: ':postId/customer-view', component: CustomerViewComponent },
  { path: ':postId/customer-edit', component: CustomerEditComponent },
  { path: 'supplier-list', component: SupplierListComponent },
  { path: ':postId/supplier-view', component: SupplierViewComponent },
  { path: ':postId/supplier-edit', component: SupplierEditComponent },
  { path: 'supplier-create', component: SupplierCreateComponent },
  { path: 'catagory-create', component: CatagoryCreateComponent },
  { path: 'catagory-list', component: CatagoryListComponent },
  { path: ':postId/catagory-view', component: CatagoryViewComponent },
  { path: ':postId/catagory-edit', component: CatagoryEditComponent },
  { path: 'sub-catagory-create', component: SubCatagoryCreateComponent },
  { path: 'sub-catagory-list', component: SubCatagoryListComponent },
  { path: ':postId/sub-catagory-view', component: SubCatagoryViewComponent },
  { path: ':postId/sub-catagory-edit', component: SubCatagoryEditComponent },
 ] },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
