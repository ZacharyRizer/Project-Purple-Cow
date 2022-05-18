import { Component, OnInit } from '@angular/core';
import { ClickingService } from '../services/clicking.service';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss'],
})
export class DashboardViewComponent implements OnInit {
  constructor(public clickService: ClickingService) {}

  ngOnInit(): void {}
}
