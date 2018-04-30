import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

// Our modules
import {AuthModule} from './auth/auth.module';
import {AppRoutingModule} from './app-routing.module';

// Components
import {AppComponent} from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
