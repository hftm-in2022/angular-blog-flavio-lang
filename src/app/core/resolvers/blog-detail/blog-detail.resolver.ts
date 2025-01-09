import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { BlogDetailPage } from '../../schemas/blogs.schema';
import { BlogService } from '../../services/blog.service';

export const blogDetailResolver: ResolveFn<BlogDetailPage> = (route) => {
  const blogService = inject(BlogService);
  const blogId = route.paramMap.get('id');
  if (!blogId || isNaN(+blogId)) {
    throw new Error('Invalid blog id');
  }
  return blogService.getBlog(+blogId);
};
