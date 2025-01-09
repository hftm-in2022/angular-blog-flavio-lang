import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogDetailPage } from 'src/app/core/schemas/blogs.schema';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.scss',
})
export class BlogDetailComponent implements OnInit {
  data: BlogDetailPage | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.data = this.route.snapshot.data['data'] as BlogDetailPage;
  }
}
