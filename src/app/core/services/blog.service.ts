import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { catchError, Observable, of, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  BlogDetailPage,
  BlogDetailPageSchema,
  BlogOverviewPage,
  BlogOverviewPageSchema,
} from '../schemas/blogs.schema';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(
    private apiClient: HttpClient,
    private oidcSecurityService: OidcSecurityService,
  ) {}

  // Return all blog entries with pagination
  getBlogs(pageIndex = 0, pageSize = 10): Observable<BlogOverviewPage> {
    const queryParams = new HttpParams();

    queryParams.set('pageSize', pageSize);
    queryParams.set('pageIndex', pageIndex);

    return this.apiClient
      .get<BlogOverviewPage>(environment.apiUrl + '/entries', {
        params: queryParams,
      })
      .pipe(
        switchMap((data) => {
          console.log(data);
          const parser = BlogOverviewPageSchema.safeParse(data);
          if (parser.success) {
            return of(parser.data);
          } else {
            console.log(parser.error);
            console.error('Read validation for BlogOverviewPageSchema failes!');
            throw new Error('Read validation failed');
          }
        }),
        catchError((err) => {
          console.error(err);
          throw Error('Fehler beim Laden der Blogeinträge!');
        }),
      );
  }

  getBlog(id: number): Observable<BlogDetailPage> {
    return this.apiClient
      .get<BlogDetailPage>(environment.apiUrl + '/entries/' + id)
      .pipe(
        switchMap((data) => {
          const parser = BlogDetailPageSchema.safeParse(data);
          if (parser.success) {
            return of(parser.data);
          } else {
            console.error('Read validation for BlogDetailPageSchema failed!');
            throw new Error('Read validation failed');
          }
        }),
        catchError((err) => {
          console.error(err);
          throw new Error('Fehler beim Laden des Blogeintrags!');
        }),
      );
  }

  createBlog(blog: {
    title: string;
    content: string;
    headerImageUrl?: string;
  }) {
    return this.oidcSecurityService.getAccessToken().pipe(
      switchMap((accessToken) => {
        const headers = new HttpHeaders({
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        });

        return this.apiClient
          .post<
            unknown | null
          >(environment.apiUrl + '/entries', blog, { headers })
          .pipe(
            switchMap((res) => {
              if (res === null) {
                return of(null);
              } else {
                const parser = BlogDetailPageSchema.safeParse(res);

                if (parser.success) {
                  return of(parser.data);
                } else {
                  throw new Error('Return value invalid');
                }
              }
            }),
          );
      }),
      catchError((err) => {
        console.error(err);
        throw new Error('Fehler beim Speichern!');
      }),
    );
  }
}
