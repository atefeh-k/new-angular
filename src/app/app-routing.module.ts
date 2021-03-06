import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './general/layout/layout.component';

const routes: Routes = [{
  path:'',
  redirectTo: 'home',
  pathMatch: 'full'
},
{
  path:'',
  component: LayoutComponent,
  children: [
    {
      path: '',
      loadChildren: () =>import('./products/products.module').then(m => m.ProductsModule)
    },
    {
      path: '',
      loadChildren: () =>import('./location/location.module').then(m => m.LocationModule)
    }
    
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
