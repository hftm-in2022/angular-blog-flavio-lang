import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { BlogDetailPage } from 'src/app/core/schemas/blogs.schema';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [
    MatCardModule,
    DatePipe,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
  ],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.scss',
})
export class BlogDetailComponent implements OnInit {
  data: BlogDetailPage | undefined;

  constructor(
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.data = this.route.snapshot.data['data'] as BlogDetailPage;
  }

  onLikeClick() {
    this.snackBar.open('Likes noch nicht implementiert!', 'Schliessen', {
      duration: 3000,
    });
  }

  onCommentClick() {
    this.snackBar.open(
      'Kommentare erstellen noch nicht implementiert!',
      'Schliessen',
      { duration: 3000 },
    );
  }
}
