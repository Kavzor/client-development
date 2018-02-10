import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { StatusComponent } from './status/status.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: 'home', component: WelcomeComponent
  },
  {
    path: '', component: WelcomeComponent
  },
  {
    path: 'status', component: StatusComponent
  },
  {
    path: 'contact', component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
