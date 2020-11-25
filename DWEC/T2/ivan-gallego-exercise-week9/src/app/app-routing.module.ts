import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPageComponent } from './products-page/products-page.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NumericIdGuardGuard } from './guards/numeric-id-guard.guard';
import { PageLeaveGuardGuard } from './guards/page-leave-guard.guard';
import { ProductResolver } from './resolvers/product.resolver';

const routes: Routes = [
  { path: 'products', component: ProductsPageComponent },
  { path: 'products/add', component: ProductFormComponent, canDeactivate: [PageLeaveGuardGuard] },
  {
    path: 'products/:id',
    component: ProductDetailsComponent,
    canActivate: [NumericIdGuardGuard],
    resolve: { product: ProductResolver }
  },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: '**', redirectTo: '/products', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
