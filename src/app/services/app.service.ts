import { Injectable } from '@angular/core';
import { SeoService } from './seo.service';
import { siteName } from '../app.config';
import { MemoryStorageService } from './memory-storage.service';
import { Router } from '@angular/router';
// import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    public seo: SeoService,
    public memoryStorage: MemoryStorageService,
    private router: Router,
    // public alert: AlertService,
  ) {
    this.seo.siteName = siteName
  }

  routerInProgress = false
  maxDeviceWidth = Math.max(window.screen.width, window.screen.height)
  showHttpProgress = false

  // cd = new Subject<void>()

}
