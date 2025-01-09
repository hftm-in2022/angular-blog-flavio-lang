import { CommonModule } from '@angular/common';
import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogOverviewEntry } from 'src/app/core/schemas/blogs.schema';
import { BlogCardComponent } from '../blog-card/blog-card.component';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [BlogCardComponent, CommonModule, MatGridListModule],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss',
})
export class BlogListComponent implements OnInit {
  blogEntries: WritableSignal<BlogOverviewEntry[]> = signal([]);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loadBlogEntries();
  }

  loadBlogEntries() {
    const data = this.route.snapshot.data['data'];
    if (data) {
      this.blogEntries.set(data.data);
    }
  }

  goToBlog(entry: BlogOverviewEntry) {
    this.router.navigate(['/blogs', entry.id]);
  }
}
