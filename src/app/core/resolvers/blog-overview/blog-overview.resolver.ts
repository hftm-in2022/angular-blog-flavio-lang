import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { BlogOverviewPage } from '../../schemas/blogs.schema';
import { BlogService } from '../../services/blog.service';

export const blogOverviewResolver: ResolveFn<BlogOverviewPage> = (route) => {
  const blogService = inject(BlogService);
  const pageSize = route.queryParamMap.get('pageSize');
  const pageNumber = route.queryParamMap.get('pageIndex');

  if (!pageSize || isNaN(+pageSize) || !pageNumber || isNaN(+pageNumber)) {
    return blogService.getBlogs();
  }

  return blogService.getBlogs(+pageSize, +pageNumber);
};
