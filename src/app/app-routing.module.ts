import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BodyComponent } from './body/body.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'body', component: BodyComponent },
  { path: '', redirectTo: '/body', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
