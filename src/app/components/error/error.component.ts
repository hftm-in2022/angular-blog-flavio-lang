import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss',
})
export class ErrorComponent {}
