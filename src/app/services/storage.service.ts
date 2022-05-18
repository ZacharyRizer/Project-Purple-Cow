import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  Storage: Storage;

  constructor() {
    this.Storage = window.localStorage;
    this.initialize();
  }

  initialize() {
    const currentGroups: number[] = this.getCountGroups();

    if (!currentGroups) {
      this.setCountGroups([0]);
    }
  }

  getCountGroups(): any {
    const storage: any = this.Storage.getItem('countGroups');
    return storage ? JSON.parse(storage) : null;
  }

  setCountGroups(groups: number[]): void {
    this.Storage.setItem('countGroups', JSON.stringify(groups));
  }
}
