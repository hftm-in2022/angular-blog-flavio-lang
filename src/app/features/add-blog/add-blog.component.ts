import { Component, signal, WritableSignal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/core/services/blog.service';

@Component({
  selector: 'app-add-blog',
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './add-blog.component.html',
  styleUrl: './add-blog.component.scss',
})
export class AddBlogComponent {
  blogForm: FormGroup;
  isLoading: WritableSignal<boolean> = signal(false);

  constructor(
    private formBuilder: FormBuilder,
    private blogService: BlogService,
    private router: Router,
  ) {
    this.blogForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      content: ['', [Validators.required, Validators.minLength(10)]],
      headerImageUrl: [''],
    });
  }

  get title() {
    return this.blogForm.get('title');
  }

  get content() {
    return this.blogForm.get('content');
  }

  onSubmit(): void {
    if (this.blogForm.valid) {
      this.isLoading.set(true);
      const blog = this.blogForm.value;

      this.blogService.createBlog(blog).subscribe({
        next: () => {
          this.isLoading.set(false);
          this.router.navigate(['/']);
        },
        error: (err: Error) => {
          this.isLoading.set(false);
          console.error('Failed to create blog:', err);
        },
      });
    }
  }

  resetForm(): void {
    this.blogForm.reset();
  }
}
