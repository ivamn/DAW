import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageLeaveGuard } from '../guards/page-leave.guard';
import { NumericIdGuard } from './guards/numeric-id.guard';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { ProductResolver } from './resolvers/product.resolver';

const routes: Routes = [
  { path: 'products', component: ProductsPageComponent },
  { path: 'products/add', component: ProductFormComponent, canDeactivate: [PageLeaveGuard] },
  {
    path: 'products/:id',
    component: ProductDetailsComponent,
    canActivate: [NumericIdGuard],
    resolve: { product: ProductResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
