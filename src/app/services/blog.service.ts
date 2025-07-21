import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../models/blog';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  headers = new HttpHeaders({ Authorization: 'Bearer ${token}' });
  constructor(private http: HttpClient) {}

  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(`${environment.apiURL}/blogs`, { headers });
  }
}
