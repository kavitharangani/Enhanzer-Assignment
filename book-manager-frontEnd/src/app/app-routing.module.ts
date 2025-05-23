import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./module/feature/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'book-manager/dashboard', // Ensure this path is defined
    loadChildren: () => import('./module/feature/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'book-manager/book', // Ensure this path is defined
    loadChildren: () => import('./module/feature/book/book.module').then(m => m.BookModule)
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
