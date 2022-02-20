import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SocialAuthComponent } from './social-auth/social-auth.component';
import { OptComponent } from './opt/opt.component';
import { NgOtpInputModule } from  'ng-otp-input';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SocialAuthComponent,
    OptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOtpInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
