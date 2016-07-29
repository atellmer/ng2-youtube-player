import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { SearchService } from './shared/services/search/search.service';

import { SearchBarComponent } from './components/search-bar';
import { VideoDetailComponent } from './components/video-detail';
import { VideoListComponent } from './components/video-list';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [SearchBarComponent, VideoDetailComponent, VideoListComponent],
  providers: [SearchService],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit{

  data: any;

  constructor(private searchService: SearchService) {
    this.data = {
      videos: [],
    };
  }

  ngOnInit() {
    this.getData('');
  }

  searchHandler(term: string): any {
    this.getData(term);
  }

  getData(term: string): void {
    this.searchService.getData(term)
      .subscribe(res => {
          this.data.videos = res;
      });
  }
}
