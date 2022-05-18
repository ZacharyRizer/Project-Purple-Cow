import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvService } from './env.service';
import { StorageService } from './storage.service';

@Injectable({ providedIn: 'root' })
export class ClickingService {
  countGroups: number[];
  constructor(
    private env: EnvService,
    private http: HttpClient,
    private storageService: StorageService
  ) {
    this.countGroups = this.storageService.getCountGroups();
  }

  click(groupNum: number) {
    return this.http.get(
      `https://api.countapi.xyz/hit/${this.env.counterNamespace}-${groupNum}/${this.env.counterKey}`
    );
  }

  getClickCount(groupNum: number) {
    return this.http.get(
      `https://api.countapi.xyz/get/${this.env.counterNamespace}-${groupNum}/${this.env.counterKey}`
    );
  }
}
