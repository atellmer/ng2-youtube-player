import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-video-list',
  templateUrl: 'video-list.component.html',
  styleUrls: ['video-list.component.css']
})
export class VideoListComponent implements OnInit {
  @Input() videos: Array<any>;
  @Output() selectedVideo = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  selectVideo(video) {
    this.selectedVideo.emit(video);
  }

}
