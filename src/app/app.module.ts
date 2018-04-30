import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

// Our modules
import {AuthModule} from './auth/auth.module';

// Components
import {AppComponent} from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
