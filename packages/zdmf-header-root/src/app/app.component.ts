import { Component } from '@angular/core';

declare const VERSION: string;

@Component({
  selector: 'zdmf-header-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Version: ' + VERSION;
}
