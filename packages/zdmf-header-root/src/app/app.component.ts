import { Component, HostBinding } from '@angular/core';
import { version } from '../../package.json';
import { environment } from '../environments/environment';

@Component({
  selector: 'zdmf-header-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @HostBinding('attr.version') version: string;
  urls: { [key: string]: string };

  constructor() {
    this.version = version;
    this.urls = environment.urls;
  }

  pathIs(path: string) {
    return location.pathname == path;
  }

  pathStartsWith(path: string) {
    return location.pathname.startsWith(path);
  }
}
