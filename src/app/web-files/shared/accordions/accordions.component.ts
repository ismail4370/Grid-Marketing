import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-accordions',
  templateUrl: './accordions.component.html',
  styleUrls: ['./accordions.component.scss']
})
export class AccordionsComponent {

  accordionItems: any[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.setAccordionItems();

    // You can subscribe to route changes if needed
    this.router.events.subscribe(() => {
      this.setAccordionItems();  // Update accordion content based on the route
    });
  }

  setAccordionItems(): void {
    const route = this.activatedRoute.snapshot.firstChild?.url[0]?.path;
    console.log('Current Route:', route);  // Log the route to confirm it's correct
  
    switch (route) {
      case 'seo':
        this.accordionItems = [
          {
            id: 1,
            title: 'How long does it take to generate results?',
            expanded: true,
            body: [
              {
                description: 'Generating SEO results typically takes about 4 to 6 months. However, significant improvements may take up to one year or even longer...'
              }
            ]
          }
        ];
        break;
  
      default:
        this.accordionItems = [
          {
            id: 1,
            title: 'Default Title 1',
            expanded: false,
            body: [
              { description: 'This is the default content for item 1.' }
            ]
          },
          {
            id: 2,
            title: 'Default Title 1',
            expanded: false,
            body: [
              { description: 'This is the default content for item 1.' }
            ]
          },
          {
            id: 3,
            title: 'Default Title 1',
            expanded: false,
            body: [
              { description: 'This is the default content for item 1.' }
            ]
          }
        ];
        break;
    }
  }
  
  
}
