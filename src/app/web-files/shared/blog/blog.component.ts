import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  blogposts : any[] = []

  ngOnInit() : void{
    this.blogposts = [
      
      {
        id: 1,
        title: "What is Google Ad Grants for Nonprofits",
        image: "assets/blog/blog-1.jpg",
        description: "You may or may not have heard of the Google Ad Grants for nonprofit organizations; however, if you are running an NGO this is absolutely something you should be taking advantage of. Google Ad Grants is a grant of $10,000 per month to be used for Google Ads, a form of..." ,
      },
      {
        id: 2,
        title: "What is link building and how does it work?",
        image: "assets/blog/blog-2.jpg",
        description: "SEO (search engine optimization) is a combination of digital marketing techniques to increase the (online) visibility of a website on the search engine results pages. For most businesses this means getting on page one, or even position one, in Google’s search results...." ,
      },
      {
        id: 3,
        title: "Why is my bounce rate so high, and how can I improve the bounce rate?",
        image: "assets/blog/blog-3.jpeg",
        description: "If you’re reading this, you are probably pondering the meaning of the various statistics displayed in your Google Analytics, such as the bounce rate. Or perhaps, you’ve been using Google Analytics for a while, but never really understood the significance of the bounce..." ,
      },
  
  
    ]
  }
}
