import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClickingService } from '../services/clicking.service';

@Component({
  selector: 'app-click-group',
  templateUrl: './click-group.component.html',
  styleUrls: ['./click-group.component.scss'],
})
export class ClickGroupComponent implements OnInit {
  @Input() countGroup: number = 0;
  currentCount: number = 0;

  constructor(
    public clickService: ClickingService,
    public notifier: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.currentClickCount();
  }

  clickEvent() {
    this.clickService.click(this.countGroup).subscribe({
      next: (res: any) => {
        this.currentCount = res?.value;
        this.notifier.open(
          `Click updated for count group ${this.countGroup + 1}!`,
          '',
          {
            panelClass: 'success',
          }
        );
      },
      error: () => {
        this.notifier.open(
          `There was a problem with the click for number ${
            this.countGroup + 1
          }`,
          '',
          {
            panelClass: 'error',
          }
        );
      },
    });
  }

  currentClickCount() {
    this.clickService.getClickCount(this.countGroup).subscribe({
      next: (res: any) => {
        this.currentCount = res?.value;
      },
      error: () => {},
    });
  }
}
