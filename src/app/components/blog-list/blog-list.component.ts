import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  WritableSignal,
} from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { BlogOverviewEntry } from 'src/app/core/schemas/blogs.schema';
import { BlogSelector } from 'src/app/state/blog.selector';
import { BlogState } from 'src/app/state/blog.state';
import { BlogCardComponent } from '../blog-card/blog-card.component';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [
    BlogCardComponent,
    CommonModule,
    MatGridListModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogListComponent {
  blogState: WritableSignal<BlogState>;

  constructor(
    private router: Router,
    private blogSelector: BlogSelector,
  ) {
    this.blogState = this.blogSelector.getState();
  }

  goToBlog(entry: BlogOverviewEntry) {
    this.router.navigate(['/blogs', entry.id]);
  }
}
