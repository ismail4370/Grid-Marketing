import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner-section',
  templateUrl: './banner-section.component.html',
  styleUrls: ['./banner-section.component.scss']
})
export class BannerSectionComponent {
  bannerContent: any;
  backgroundImage: string = '';

  // Define banner content for different routes
  private bannerData: { [key: string]: any } = {
    'search-engine-optimization': {
      heading: 'We provide excellent <br> solutions',
      paragraph: 'Our expertise is in delivering top-notch services.',
      buttonText: 'Learn More',
      imageUrl: 'assets/images/business-14.jpg', // Update with correct path
    },
    about: {
      heading: 'We believe in building high value',
      paragraph: 'We connect, explore, create, empower and grow together.',
      buttonText: 'Contact Us',
      imageUrl: '../../../../assets/images/banner-gif/about-banner.png', // Update with correct path
      buttonUrl:'/contact',
    },
                       
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.setBannerContent();
  }

  private setBannerContent(): void {
    const currentPage: string = this.router.url.split('/').pop() || 'about'; // Get the last part of the URL or default to 'home'
    this.bannerContent = this.bannerData[currentPage] || this.bannerData['about']; // Default to home if not found
    this.backgroundImage = this.bannerContent.imageUrl; // Set the background image
  }
}
