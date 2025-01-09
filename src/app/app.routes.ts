import { Routes } from '@angular/router';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { blogDetailResolver } from './core/resolvers/blog-detail/blog-detail.resolver';
import { blogOverviewResolver } from './core/resolvers/blog-overview/blog-overview.resolver';

export const routes: Routes = [
  { path: '', redirectTo: '/blogs', pathMatch: 'full' },
  {
    path: 'blogs',
    component: BlogListComponent,
    resolve: {
      data: blogOverviewResolver,
    },
  },
  {
    path: 'blogs/:id',
    component: BlogDetailComponent,
    resolve: {
      data: blogDetailResolver,
    },
  },
];
