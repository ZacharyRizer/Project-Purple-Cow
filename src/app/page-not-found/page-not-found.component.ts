import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div class="wrapper">
      <div class="logo-wrapper">
        <img src="../../favicon.ico" />
      </div>
      <h2 class="message">This page cannot be found or doesn't exist.</h2>
      <button mat-stroked-button color="primary" (click)="goBack()">
        Go Back
      </button>
    </div>
  `,
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  goBack() {
    history.back();
  }
}
