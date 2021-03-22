import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { SideNavComponent } from './side-nav/side-nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BackdropComponent } from './backdrop/backdrop.component';
import { ContactComponent } from './contact/contact.component';
import { NavigationComponent } from './navigation/navigation.component';
import {MatDividerModule} from '@angular/material/divider';
import {HammerGesturesDirective} from './swipe.directive';
import { ImageholderComponent } from './imageholder/imageholder.component';
import { ImageDetailsComponent } from './image-details/image-details.component';
import { TypeFilterComponent } from './type-filter/type-filter.component';
import { ImageViewComponent } from './image-view/image-view.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { ImageDisplayComponent } from './image-view/components/image-display/image-display.component';
import { SearchImageComponent } from './home-page/components/search-image/search-image.component';
import { SalonProfileComponent } from './image-view/components/salon-profile/salon-profile.component';
import { ImageInfoComponent } from './image-view/components/image-info/image-info.component';
import { CommentComponent } from './comment/comment.component';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {TextFieldModule} from '@angular/cdk/text-field';
import { SalonPageComponent } from './salon-page/salon-page.component';
import { BackToolbarComponent } from './back-toolbar/back-toolbar.component';
import { ImageListComponent } from './image-list/image-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    BackdropComponent,
    ContactComponent,
    NavigationComponent,
    HammerGesturesDirective,
    ImageholderComponent,
    ImageDetailsComponent,
    TypeFilterComponent,
    ImageViewComponent,
    HomePageComponent,
    ImageDisplayComponent,
    SearchImageComponent,
    SalonProfileComponent,
    ImageInfoComponent,
    CommentComponent,
    SalonPageComponent,
    BackToolbarComponent,
    ImageListComponent,
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatSliderModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        MatDividerModule,
        AppRoutingModule,
        FormsModule,
        MatFormFieldModule,
        TextFieldModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
