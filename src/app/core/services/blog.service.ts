import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogDetailPage, BlogOverviewPage } from '../schemas/blogs.schema';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private apiClient: HttpClient) {}

  // Return all blog entries with pagination
  getBlogs(pageIndex = 0, pageSize = 10): Observable<BlogOverviewPage> {
    const queryParams = new HttpParams();

    queryParams.set('pageSize', pageSize);
    queryParams.set('pageIndex', pageIndex);

    return this.apiClient.get<BlogOverviewPage>(
      environment.apiUrl + '/entries',
      { params: queryParams },
    );
  }

  getBlog(id: number): Observable<BlogDetailPage> {
    return this.apiClient.get<BlogDetailPage>(
      environment.apiUrl + '/entries/' + id,
    );
  }
}
