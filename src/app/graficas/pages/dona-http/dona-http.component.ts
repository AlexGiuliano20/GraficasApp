import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [],
})
export class DonaHttpComponent implements OnInit {
  public doughnutChartLabels: string[] = [];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [{ data: [] }],
  };

  public doughnutChartType: ChartType = 'doughnut';
  constructor(private _graficasService: GraficasService) {}

  ngOnInit(): void {
    this._graficasService
      .usuariosRedesSocialesDonaData()
      .subscribe(({ labels, datasets }) => {
        this.doughnutChartData = { labels, datasets };
      });
  }
}
