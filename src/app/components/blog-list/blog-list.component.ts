import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { ActivatedRoute } from '@angular/router';
import { BlogCardComponent } from '../blog-card/blog-card.component';
import { BlogOverviewPage } from 'src/app/core/schemas/blogs.schema';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [BlogCardComponent, CommonModule, MatGridListModule],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss',
})
export class BlogListComponent implements OnInit {
  blogEntries: BlogOverviewPage | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.blogEntries = this.route.snapshot.data['data'];
  }
}
