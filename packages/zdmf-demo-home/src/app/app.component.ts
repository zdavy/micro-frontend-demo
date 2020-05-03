import { Component, HostBinding } from '@angular/core';
import { version } from '../../package.json';

@Component({
  selector: 'zdmf-demo-home',
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
