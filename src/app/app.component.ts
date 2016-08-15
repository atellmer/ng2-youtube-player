import {
  Component,
  OnInit,
  ViewEncapsulation } from '@angular/core';

import { SearchService } from './shared/services/search/search.service';
import { Data } from './shared/data.model';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  data: Data;

  constructor(private searchService: SearchService) {
    this.data = new Data();
  }

  ngOnInit() {
    this.getData('');
  }

  searchHandler(term: string): any {
    this.getData(term);
  }

  selectedVideo(video: any): void {
    this.data.selectedVideo = video;
  }

  getData(term: string): void {
    this.searchService.getData(term)
      .subscribe(res => {
        this.data.videos = res;
        this.data.selectedVideo = this.data.videos[0];
      });
  }
}