import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

  serviceContent: any[] = [];
  backgroundImage: string = '';

  // Define service content for different routes
  private serviceData: { [key: string]: any[] } = {
    'search-engine-optimization': [
      {
        id: 1,
        title: 'On Page SEO',
        description: 'We will evaluate your current SEO strategy by means of a technical SEO audit. This advanced analysis includes recommendations for improvements, an in-depth keyword research report, as well as page optimization and content marketing suggestions.',
        icon: 'fa-solid fa-chart-simple'
      },
      {
        id: 2,
        title: 'Technical SEO',
        description: 'Search engines crawl your site for information. To ensure there aren’t any technical roadblocks that could affect your performance we will optimize your website’s structure and technical elements. This will increase your website’s findability. ',
        icon: 'fa-regular fa-file-lines'
      },
      {
        id: 3,
        title: 'Off Page SEO',
        description: 'When search engines are determining your rank, they also take your website’s presence on the broader internet into consideration. We help to ensure you are building the right connections through the correct implementation of linkbuilding. ',
        icon: 'fa-solid fa-link'
      },
    ],
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.setServiceContent();
  }

  private setServiceContent(): void {
    const currentPage: string = this.router.url.split('/').pop() || 'services'; // Get the last part of the URL or default to 'services'
    this.serviceContent = this.serviceData[currentPage] || this.serviceData['services']; // Default to services if not found
  }
}
