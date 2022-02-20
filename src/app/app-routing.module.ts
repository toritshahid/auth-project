import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OptComponent } from './opt/opt.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '' , component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'otp', component: OptComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
