import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

// Our modules
import {AuthModule} from './auth/auth.module';
import {AppRoutingModule} from './app-routing.module';

// Components
import {AppComponent} from './app.component';

// Services
import {UsersService} from './shared/services/users.service';
import {AuthService} from './shared/services/auth.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [
    UsersService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
