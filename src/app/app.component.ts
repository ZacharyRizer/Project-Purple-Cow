import { Component, OnInit } from '@angular/core';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar></app-navbar>
    <div class="wrapper">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private storageService: StorageService) {
    this.storageService.initialize();
  }

  ngOnInit(): void {}
}
