import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageViewComponent} from './image-view/image-view.component';
import { HomePageComponent } from './home-page/home-page.component';
import {SalonPageComponent} from './salon-page/salon-page.component';

const routes: Routes = [
  { path: '',  component : HomePageComponent, pathMatch : 'full'},
  { path: 'image', component: ImageViewComponent, pathMatch : 'full'},
  { path: 'salon', component: SalonPageComponent, pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
