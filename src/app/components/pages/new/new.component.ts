import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { SeriesService } from '../../../services/series';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  imports: [ReactiveFormsModule],
  templateUrl: './new.html',
  styleUrl: './new.css',
})
export class NewComponent {
  private seriesService = inject(SeriesService);
  private router = inject(Router);

  responseMessage: string = '';

  seriesForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(100),
    ]),
    channel: new FormControl('', [Validators.required]),
    rating: new FormControl('', [Validators.required, Validators.min(0), Validators.max(10)]),
  });

  onSubmit() {
    if (this.seriesForm.valid) {
      this.seriesService.addSeries(this.seriesForm.value).subscribe({
        next: (response) => {
          this.responseMessage = `Series "${response.title}" added successfully!`;
          alert(this.responseMessage);
          this.router.navigate(['/home']);
        },
        error: (error) => {
          this.responseMessage = 'Failed to add series. Please try again.';
          alert(this.responseMessage);
        },
      });
    }
  }
}
