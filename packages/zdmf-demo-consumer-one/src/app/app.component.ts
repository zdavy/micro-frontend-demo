import { Component, HostBinding } from '@angular/core';
import { version } from '../../package.json';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  @HostBinding('attr.version') version: string;

  constructor() {
    this.version = version;
  }
}
