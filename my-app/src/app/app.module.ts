import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserHttpService } from './services/user-http.service';
import { UserService } from './services/user.service';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule
  ],
  //methode Class
  //providers: [{ provide : UserService, useClass: UserService}, UserHttpService],
  //methode inject with @Inject()
  //providers: [{ provide : UserService, useClass: UserService}, UserHttpService],
  //methode inject with provide
  providers: [{ provide : UserService, useClass: UserService}, UserHttpService],
  //methode simple
  //providers: [UserService, UserHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
