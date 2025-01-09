import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class GlobalErrorHandler implements ErrorHandler {
  snackBar = inject(MatSnackBar);
  router = inject(Router);

  handleError(error: Error): void {
    // Check if error is http error
    if (error instanceof HttpErrorResponse) {
      this.showHttpError(error);
    } else {
      console.error(error);
      this.snackBar.open(
        'Ooops, da ist etwas schiefgelaufen 😕',
        'Schliessen',
        { duration: 3000 },
      );
      this.router.navigate(['/']);
    }
  }

  showHttpError(error: HttpErrorResponse) {
    if (error.status === 404) {
      this.snackBar.open('Diese Ressource existiert nicht 😕', 'Schliessen', {
        duration: 3000,
      });
      this.router.navigate(['/']);
    } else if (error.status === 0) {
      this.snackBar.open(
        'Du bist offline, bitte verbinde dich mit dem Internet 💥',
        'Schliessen',
        { duration: 3000 },
      );
    } else {
      this.snackBar.open(
        'Ooops, da ist etwas schiefgelaufen 😕',
        'Schliessen',
        { duration: 3000 },
      );
    }
  }
}
