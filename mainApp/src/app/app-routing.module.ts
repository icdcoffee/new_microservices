import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { ExternalUrlComponent } from './externalurl/externalurl.component';

const routes: Routes = [
  { path: 'microserviceOne', 
   component: ExternalUrlComponent,
  data: { externalUrl: 'http://localhost:4210/'}},
  { path: 'microserviceTwo', 
  component: ExternalUrlComponent,
  data: { externalUrl: 'http://localhost:4220/'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: 'externalUrlResolver',
      useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        debugger;
        return route.data.externalUrl;
      }
    }
  ]
})
export class AppRoutingModule { }
