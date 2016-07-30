import {
  Component,
  OnInit,
  OnChanges,
  Input } from '@angular/core';
import {
  DomSanitizationService,
  SafeResourceUrl } from '@angular/platform-browser';

@Component({
  moduleId: module.id,
  selector: 'app-video-detail',
  templateUrl: 'video-detail.component.html',
  styleUrls: ['video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {
  @Input() video: any;

  url: SafeResourceUrl;

  constructor(private sanitationService: DomSanitizationService) { }

  ngOnInit() { }

  ngOnChanges() {
    if (this.video && this.video.hasOwnProperty('id')) {
      this.url = this.sanitationService.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.video.id.videoId}`);
    }
  }
}
