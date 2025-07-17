import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../models/blog';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private http: HttpClient) {}

  myRoute = 'blogs';

  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(`${environment.apiURL}/${this.myRoute}`);
  }
}
