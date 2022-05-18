import { Component, OnInit } from '@angular/core';
import { ClickingService } from '../services/clicking.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    public clickService: ClickingService,
    private storageService: StorageService
  ) {}

  ngOnInit() {}

  addCountGroup() {
    const newGroups: number[] = [
      ...this.clickService.countGroups,
      this.clickService.countGroups.length,
    ];
    this.clickService.countGroups = newGroups;
    this.storageService.setCountGroups(newGroups);
  }

  removeCountGroup() {
    const newGroups: number[] = this.clickService.countGroups.slice(0, -1);
    this.clickService.countGroups = newGroups;
    this.storageService.setCountGroups(newGroups);
  }
}
