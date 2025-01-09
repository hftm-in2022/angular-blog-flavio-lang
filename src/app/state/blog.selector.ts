import { Injectable, signal } from '@angular/core';
import { BlogState, BlogStateAction, initialState } from './blog.state';
import { blogReducer } from './blog.reducer';

@Injectable({
  providedIn: 'root',
})
export class BlogSelector {
  private state = signal<BlogState>(initialState);

  getState() {
    return this.state;
  }

  dispatch(action: BlogStateAction) {
    const newState = blogReducer(this.state(), action);
    this.state.set(newState);
  }
}
