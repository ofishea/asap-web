import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { FaqComponent } from './faq/faq.component';
import { ReviewComponent } from './review/review.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { TheBestComponent } from './the-best/the-best.component';
import { AddonComponent } from './addon/addon.component';
import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    HeaderComponent,
    IntroComponent,
    FaqComponent,
    ReviewComponent,
    FooterComponent,
    ContactComponent,
    TheBestComponent,
    AddonComponent
  ]
})
export class HomePageModule {}
