import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';
import { blogDetailResolver } from './blog-detail.resolver';
import { BlogDetailPage } from '../../schemas/blogs.schema';

describe('blogDetailResolver', () => {
  const executeResolver: ResolveFn<BlogDetailPage> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() =>
      blogDetailResolver(...resolverParameters),
    );

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
