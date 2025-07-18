import { Component, Input } from '@angular/core';
import { Blog } from '../../../models/blog';
import { environment } from '../../../../environments/environment.development';

@Component({
  selector: 'app-blog-list',
  imports: [],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css',
})
export class BlogListComponent {
  @Input({ required: true }) blogs: Blog[] = [];
  picSumURL = environment.picsumURL;
}
