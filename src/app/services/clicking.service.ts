import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvService } from './env.service';

@Injectable({ providedIn: 'root' })
export class ClickingService {
  constructor(private env: EnvService, private http: HttpClient) {}

  click() {
    return this.http.get(
      `https://api.countapi.xyz/hit/${this.env.counterNamespace}/${this.env.counterKey}`
    );
  }

  getClickCount() {
    return this.http.get(
      `https://api.countapi.xyz/get/${this.env.counterNamespace}/${this.env.counterKey}`
    );
  }
}
