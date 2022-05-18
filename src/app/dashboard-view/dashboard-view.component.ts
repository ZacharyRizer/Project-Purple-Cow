import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClickingService } from '../services/clicking.service';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss'],
})
export class DashboardViewComponent implements OnInit {
  currentCount: number = 0;

  constructor(
    public clickService: ClickingService,
    public notifier: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.currentClickCount();
  }

  clickEvent() {
    this.clickService.click().subscribe({
      next: (res: any) => {
        this.currentCount = res?.value;
        this.notifier.open(`Click updated!`, '', {
          panelClass: 'success',
        });
      },
      error: () => {
        this.notifier.open(`There was a problem with the click.`, '', {
          panelClass: 'error',
        });
      },
    });
  }

  currentClickCount() {
    this.clickService.getClickCount().subscribe({
      next: (res: any) => {
        this.currentCount = res?.value;
      },
      error: () => {},
    });
  }
}
