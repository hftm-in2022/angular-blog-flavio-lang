import { BlogDetailPage, BlogOverviewPage } from '../core/schemas/blogs.schema';

export interface BlogState {
  loading: boolean;
  blogs?: BlogOverviewPage;
  blogDetail?: BlogDetailPage;
}

export interface BlogStateAction {
  type: 'SET_LOADING' | 'BLOGS_LOADED' | 'BLOG_DETAIL_LOADED';
  payload: boolean | BlogOverviewPage | BlogDetailPage;
}

export const initialState: BlogState = {
  loading: false,
  blogs: undefined,
  blogDetail: undefined,
};
