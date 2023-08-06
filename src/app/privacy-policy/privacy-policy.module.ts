import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { PrivacyPolicyPageRoutingModule } from './privacy-policy-routing.module';

import { PrivacyPolicyPage } from './privacy-policy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrivacyPolicyPageRoutingModule
  ],
  declarations: [PrivacyPolicyPage, HeaderComponent, BodyComponent,FooterComponent]
})
export class PrivacyPolicyPageModule {}
