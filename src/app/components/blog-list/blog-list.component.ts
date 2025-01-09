import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { EMPTY, Observable } from 'rxjs';
import { BlogOverviewPage } from 'src/app/schemas/blogs.schema';
import { BlogService } from 'src/app/services/blog.service';
import { BlogCardComponent } from '../blog-card/blog-card.component';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [BlogCardComponent, CommonModule, MatGridListModule],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss',
})
export class BlogListComponent implements OnInit {
  blogEntries$: Observable<BlogOverviewPage> = EMPTY;

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogEntries$ = this.blogService.getBlogs();
  }
}
