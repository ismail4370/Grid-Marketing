import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebFilesRoutingModule } from './web-files-routing.module';
import { WebFilesComponent } from './web-files.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BannerSectionComponent } from './shared/banner-section/banner-section.component';
import { BlogComponent } from './shared/blog/blog.component';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { ConversationComponent } from './shared/conversation/conversation.component';
import { DigitalServicesComponent } from './shared/digital-services/digital-services.component';
import { HomeContactComponent } from './shared/home-contact/home-contact.component';
import { HomeComponent } from './components/home/home.component';
import { SeoComponent } from './components/seo/seo.component';
import { AccordionsComponent } from './shared/accordions/accordions.component';
import { ServicesComponent } from './shared/services/services.component';
import { TestimonialsComponent } from './shared/testimonials/testimonials.component';
import { ConsultationComponent } from './shared/consultation/consultation.component';



@NgModule({
  declarations: [
    WebFilesComponent,
    HeaderComponent,
    FooterComponent,
    BannerSectionComponent,
    BlogComponent,
    CarouselComponent,
    ConversationComponent,
    DigitalServicesComponent,
    HomeContactComponent,
    HomeComponent,
    SeoComponent,
    AccordionsComponent,
    ServicesComponent,
    TestimonialsComponent,
    ConsultationComponent,
  ],
  imports: [
    CommonModule,
    WebFilesRoutingModule
  ]
})
export class WebFilesModule { }
