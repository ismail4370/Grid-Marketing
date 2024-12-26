import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-accordions',
  templateUrl: './accordions.component.html',
  styleUrls: ['./accordions.component.scss']
})
export class AccordionsComponent implements OnInit {
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
    const route = this.activatedRoute.snapshot.routeConfig?.path;

    switch(route) {
      case 'search-engine-optimization':
        this.accordionItems = [
          {
            id: 1,
            title: 'Step 1 ⟶ Analysis',
            expanded: false,
            body: [
              { description: 'The process begins with a baseline analysis on the current setup of your website. In this analysis, we will report on any existing problems from a technical standpoint. Moreover, we will evaluate your backlink profile and competitive landscape to create an effective SEO roadmap.' }
            ]
          },
          {
            id: 2,
            title: 'Step 2 ⟶ Implementation',
            expanded: false,
            body: [
              { description: 'After our baseline analysis, we will start making adjustments to your website. Changes will include technical optimizations, site content improvements, keyword implementation, and link building.' }
            ]
          },
          {
            id: 3,
            title: 'Step 3 ⟶ Results',
            expanded: false,
            body: [
              { description: 'During our optimization process, your online findability will grow more and more. This will translate into more organic website traffic and sales.' }
            ]
          }
       ];
        break;
            
      default:
        this.accordionItems = [
          { id: 1, title: 'Default Item 1', expanded: true, body: 'Default content.' },
          { id: 2, title: 'Default Item 2', expanded: false, body: 'Default content.' },
          { id: 3, title: 'Default Item 3', expanded: false, body: 'Default content.' }
        ];
        break;
    }
  }
}
