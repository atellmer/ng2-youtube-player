import { Component } from '@angular/core';

import { SearchBarComponent } from './components/search-bar';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [SearchBarComponent],
})
export class AppComponent {
}
