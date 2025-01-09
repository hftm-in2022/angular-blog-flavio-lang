import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogCardComponent } from '../blog-card/blog-card.component';
import {
  BlogOverviewEntry,
  BlogOverviewPage,
} from 'src/app/core/schemas/blogs.schema';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [BlogCardComponent, CommonModule, MatGridListModule],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss',
})
export class BlogListComponent implements OnInit {
  blogEntries: BlogOverviewPage | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.blogEntries = this.route.snapshot.data['data'];
  }

  goToBlog(entry: BlogOverviewEntry) {
    this.router.navigate(['/blogs', entry.id]);
  }
}
