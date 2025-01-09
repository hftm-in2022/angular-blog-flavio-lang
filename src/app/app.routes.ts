import { Routes } from '@angular/router';
import { blogDetailResolver } from './core/resolvers/blog-detail/blog-detail.resolver';
import { blogOverviewResolver } from './core/resolvers/blog-overview/blog-overview.resolver';

export const routes: Routes = [
  { path: '', redirectTo: '/blogs', pathMatch: 'full' },
  {
    path: 'blogs',
    loadComponent: () =>
      import('./components/blog-list/blog-list.component').then(
        (m) => m.BlogListComponent,
      ), // Lazy loading for standalone components
    resolve: {
      data: blogOverviewResolver,
    },
  },
  {
    path: 'blogs/:id',
    loadComponent: () =>
      import('./components/blog-detail/blog-detail.component').then(
        (m) => m.BlogDetailComponent,
      ), // Lazy loading for standalone components
    resolve: {
      data: blogDetailResolver,
    },
  },
];
