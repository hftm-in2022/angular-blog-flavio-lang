import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { blogOverviewResolver } from './blog-overview.resolver';
import { BlogOverviewPage } from '../../schemas/blogs.schema';

describe('blogOverviewResolver', () => {
  const executeResolver: ResolveFn<BlogOverviewPage> = (
    ...resolverParameters
  ) =>
    TestBed.runInInjectionContext(() =>
      blogOverviewResolver(...resolverParameters),
    );

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
