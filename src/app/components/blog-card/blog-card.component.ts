import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { BlogOverviewEntry } from 'src/app/core/schemas/blogs.schema';
@Component({
  selector: 'app-blog-card',
  imports: [MatCardModule, MatButtonModule, DatePipe, MatIconModule],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.scss',
})
export class BlogCardComponent {
  @Input() entry: BlogOverviewEntry | undefined;

  @Output()
  selectBlog = new EventEmitter<BlogOverviewEntry>();

  selectBlogEntry(entry: BlogOverviewEntry) {
    this.selectBlog.emit(entry);
  }
}
