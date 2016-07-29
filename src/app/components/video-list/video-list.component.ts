import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-video-list',
  templateUrl: 'video-list.component.html',
  styleUrls: ['video-list.component.css']
})
export class VideoListComponent implements OnInit {
  @Input() videos: Array<any>;

  constructor() {}

  ngOnInit() {}

}
