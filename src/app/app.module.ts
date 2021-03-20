import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from 'src/admin/admin.component';
import { UserComponent } from 'src/user/user.component';
import { CountryService } from 'src/country.service';
import { FormsModule } from '@angular/forms';
import { CustomDropdownComponent } from 'src/custom-dropdown/custom-dropdown.component';
import { HttpClientModule } from '@angular/common/http';
const routes: Routes  = [
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'user',
    component: UserComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    CustomDropdownComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  FormsModule,
  HttpClientModule
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
