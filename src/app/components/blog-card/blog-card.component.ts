import { Component, Input } from '@angular/core';
import { BlogOverviewEntry } from 'src/app/schemas/blogs.schema';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.scss',
})
export class BlogCardComponent {
  @Input() entry: BlogOverviewEntry | undefined;
}
