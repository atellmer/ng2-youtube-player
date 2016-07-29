import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-search-bar',
  templateUrl: 'search-bar.component.html',
  styleUrls: ['search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() search = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

  changeHandler(term: HTMLInputElement): void {
    this.search.emit(term.value);
  }

}
