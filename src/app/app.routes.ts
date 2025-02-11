import { Routes } from '@angular/router';
import { blogDetailResolver } from './core/resolvers/blog-detail/blog-detail.resolver';
import { blogOverviewResolver } from './core/resolvers/blog-overview/blog-overview.resolver';
import { ErrorComponent } from './components/error/error.component';
import { isAuthenticatedGuard } from './core/guards/is-authenticated.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/blogs', pathMatch: 'full' },
  {
    path: 'blogs',
    loadComponent: () =>
      import('./features/blog-list/blog-list.component').then(
        (m) => m.BlogListComponent,
      ), // Lazy loading for standalone components
    resolve: {
      data: blogOverviewResolver,
    },
  },
  {
    path: 'blogs/:id',
    loadComponent: () =>
      import('./features/blog-detail/blog-detail.component').then(
        (m) => m.BlogDetailComponent,
      ), // Lazy loading for standalone components
    resolve: {
      data: blogDetailResolver,
    },
  },

  {
    path: 'create',
    loadComponent: () =>
      import('./features/add-blog/add-blog.component').then(
        (m) => m.AddBlogComponent,
      ), // Lazy loading for standalone components
    canActivate: [isAuthenticatedGuard],
  },

  {
    path: '**',
    component: ErrorComponent,
  },
];
