import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { version } from '../../package.json';
import { environment } from '../environments/environment';

@Component({
  selector: 'zdmf-header-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  version: string;
  urls: { [key: string]: string };

  constructor(private router: Router) {
    this.version = version;
    this.urls = environment.urls;
  }

  pathIs(path: string) {
    return this.router.url == path;
  }

  pathStartsWith(path: string) {
    return this.router.url.startsWith(path);
  }
}
