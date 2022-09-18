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
    this._graficasService.usuariosRedesSociales().subscribe((data) => {
      const labels = Object.keys(data);
      const datos = Object.values(data);
      this.doughnutChartData = {
        labels: Object.keys(data),
        datasets: [{ data: Object.values(data) }],
      };
    });
  }
}
