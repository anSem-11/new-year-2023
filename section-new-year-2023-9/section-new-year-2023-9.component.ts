import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'section-new-year-2023-9',
  templateUrl: './section-new-year-2023-9.component.html',
  styleUrls: ['./section-new-year-2023-9.component.scss'],
})
export class SectionNewYear2023_9Component implements OnInit {
  @ViewChild('videoNewYear2023', { static: true }) video: ElementRef;

  ngOnInit() {
    const video = this.video.nativeElement as HTMLVideoElement;

    video.addEventListener('loadeddata', () => {
      video.muted = true;
      video.play();
    });
  }
}
