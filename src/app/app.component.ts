import { Component } from '@angular/core';
import { Blog } from './models/blog';
import { environment } from '../environments/environment.development';
import { BlogService } from './services/blog.service';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  blogs: Blog[] = [];
  picsumURL = environment.picsumURL;

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe({
      next: (blogs1) => {
        console.log('Next occurred');
        this.blogs = blogs1;
        console.log(blogs1);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('The observable is complete');
      },
    });
  }
}
