import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketListingsComponent } from './ticket-listings/ticket-listings.component';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { NotFoundPageComponent } from './shared/not-found-page/not-found-page.component';
import { HttpErrorComponent } from './shared/error/http-error/http-error.component';
import { ClientErrorComponent } from './shared/error/client-error/client-error.component';


export const routes: Routes = [
  {
    path: '', redirectTo: 'ticket-list', pathMatch: 'full'
  },
  {
    path: 'ticket-list', component: TicketListingsComponent
  },
  {
    path: 'ticket-detail', component: TicketDetailComponent
  },
  {
    component: NotFoundPageComponent,
    path: '404',
  },
  {
    component: HttpErrorComponent,
    path: 'http-error'
  },
  {
    component: ClientErrorComponent,
    path: 'client-error'
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
