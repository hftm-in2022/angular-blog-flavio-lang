import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { BlogOverviewPage } from '../../schemas/blogs.schema';
import { BlogService } from '../../services/blog.service';
import { BlogSelector } from 'src/app/state/blog.selector';
import { tap } from 'rxjs';

export const blogOverviewResolver: ResolveFn<BlogOverviewPage> = () => {
  const blogService = inject(BlogService);
  const blogSelector = inject(BlogSelector);

  blogSelector.dispatch({ type: 'SET_LOADING', payload: true });

  return blogService.getBlogs().pipe(
    tap((data) => {
      blogSelector.dispatch({ type: 'BLOGS_LOADED', payload: data });
      blogSelector.dispatch({ type: 'SET_LOADING', payload: false });
    }),
  );
};
