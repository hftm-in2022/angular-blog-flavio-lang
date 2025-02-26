import { DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  WritableSignal,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BlogSelector } from 'src/app/state/blog.selector';
import { BlogState } from 'src/app/state/blog.state';

@Component({
  selector: 'app-blog-detail',
  imports: [
    MatCardModule,
    DatePipe,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogDetailComponent {
  blogState: WritableSignal<BlogState>;

  constructor(
    private snackBar: MatSnackBar,
    private blogSelector: BlogSelector,
  ) {
    this.blogState = this.blogSelector.getState();
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
