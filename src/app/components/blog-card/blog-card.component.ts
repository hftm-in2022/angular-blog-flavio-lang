import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { BlogOverviewEntry } from 'src/app/core/schemas/blogs.schema';
@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, DatePipe, MatIconModule],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.scss',
})
export class BlogCardComponent {
  @Input() entry: BlogOverviewEntry | undefined;
}
