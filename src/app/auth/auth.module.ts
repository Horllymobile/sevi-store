import { SharedModule } from './../core/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgottenPasswordComponent } from './forgotten-password/forgotten-password.component';
const routes: Routes = [
  {
    path: 'forgotten-password',
    component: ForgottenPasswordComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [
    WelcomeComponent,
    LoginComponent,
    RegisterComponent,
    ForgottenPasswordComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class AuthModule {}
