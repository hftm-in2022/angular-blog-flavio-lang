import { BlogDetailPage, BlogOverviewPage } from '../core/schemas/blogs.schema';
import { BlogState, BlogStateAction } from './blog.state';

export function blogReducer(
  state: BlogState,
  action: BlogStateAction,
): BlogState {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload as boolean };
    case 'BLOGS_LOADED':
      return { ...state, blogs: action.payload as BlogOverviewPage };
    case 'BLOG_DETAIL_LOADED':
      return { ...state, blogDetail: action.payload as BlogDetailPage };
    default:
      return state;
  }
}
