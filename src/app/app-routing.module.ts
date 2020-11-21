import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ErrorPageComponent} from './views/pages/error-page/error-page.component';


const routes: Routes = [
  { path: '', loadChildren: './layouts/layout1/layout1.module#Layout1Module' },
  { path: 'page', loadChildren: './layouts/blank-layout/blank-layout.module#BlankLayoutModule' },
  { path: 'auth', loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule' },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
