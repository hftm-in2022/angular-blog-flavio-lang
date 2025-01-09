import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { BlogDetailPage } from '../../schemas/blogs.schema';
import { BlogService } from '../../services/blog.service';
import { BlogSelector } from 'src/app/state/blog.selector';
import { tap } from 'rxjs';

export const blogDetailResolver: ResolveFn<BlogDetailPage> = (route) => {
  const blogService = inject(BlogService);
  const blogSelector = inject(BlogSelector);
  const blogId = route.paramMap.get('id');
  if (!blogId || isNaN(+blogId)) {
    throw new Error('Invalid blog id');
  }

  // Notify state that data is being loaded
  blogSelector.dispatch({ type: 'SET_LOADING', payload: true });

  return blogService.getBlog(+blogId).pipe(
    tap((data) => {
      blogSelector.dispatch({ type: 'BLOG_DETAIL_LOADED', payload: data });
      blogSelector.dispatch({ type: 'SET_LOADING', payload: false });
    }),
  );
};
