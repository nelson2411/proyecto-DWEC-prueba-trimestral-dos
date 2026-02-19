import { Component, OnInit, inject } from '@angular/core';
import { SeriesService } from '../../../services/series';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent implements OnInit {
  series: any[] = [];
  private seriesService = inject(SeriesService);

  ngOnInit() {
    this.seriesService.getAllSeries().subscribe((data) => {
      this.series = data;
    });
  }
}
