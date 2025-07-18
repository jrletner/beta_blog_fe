import { Component } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../models/blog';
import { BlogListComponent } from '../../shared/blogs/blog-list/blog-list.component';

@Component({
  selector: 'app-home',
  imports: [BlogListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  homeBlogs: Blog[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe({
      next: (blogData) => {
        this.homeBlogs = blogData;
        console.log(blogData);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
