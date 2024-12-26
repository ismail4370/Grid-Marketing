import { Component } from '@angular/core';

@Component({
  selector: 'app-digital-services',
  templateUrl: './digital-services.component.html',
  styleUrls: ['./digital-services.component.scss']
})
export class DigitalServicesComponent {
  casestudies = [
    {
      id: 1,
      title: "Search Engine Optimization",
      image: "assets/services/case-6.jpg",
      description: "We help you improve your Google ranking and increase your organic (non-paid) website traffic. SEO is more than just incorporating keywords and we can help to optimize all elements." ,
    },
    {
      id: 2,
      title: "Search Engine Advertising",
      image: "assets/services/case-6.jpg",
      description: "Search engine advertising, also known as pay-per-click advertising, helps you reach new customers and guarantees a consistent traffic flow to your website.",
    },
    {
      id: 3,
      title: "Web Development & Design",
      image: "assets/services/case-6.jpg",
      description: "Websites are the essence of your online presence. We will create a functional website that is customized for your business and drives results. All of our websites include SEO, and lead generation tools." ,
    },
    {
      id: 4,
      title: "Social Media Marketing",
      image: "assets/services/case-6.jpg",
      description: "We help you with social media management and advertising to help you grow your business and reach new clients." ,
    },
    {
      id: 5,
      title: "Content Marketing",
      image: "assets/services/case-6.jpg",
      description: "Content marketing helps you increase online visibility, traffic and brand awareness. We offer effective SEO-copywriting that resonates with your target audience." ,
    },
    {
      id: 6,
      title: "Digital Marketing Strategy",
      image: "assets/services/case-6.jpg",
      description: "Get your own digital marketing strategy built from scratch. Schedule a free consultation to get started." ,
    },
  ]

}
