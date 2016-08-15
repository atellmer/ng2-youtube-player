import {
  Component,
  OnInit,
  Output,
  EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

@Component({
  moduleId: module.id,
  selector: 'app-search-bar',
  templateUrl: 'search-bar.component.html',
  styleUrls: ['search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  @Output() search: EventEmitter<any> = new EventEmitter();

  term: FormControl = new FormControl('');

  constructor() {
    this.term.valueChanges
      .debounceTime(300)
      .subscribe(term => this.search.emit(term));
  }

  ngOnInit() { }
}