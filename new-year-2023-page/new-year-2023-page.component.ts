import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, HostListener, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { DeviceDetectService } from '@fx-shared/services';

import { SwiperConfigInterface, SwiperDirective } from 'ngx-swiper-wrapper';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Regulators } from '@fx-project-shared/models';


@Component({
  selector: 'new-year-2023-page',
  templateUrl: './new-year-2023-page.component.html',
  styleUrls: [ './new-year-2023-page.component.scss' ],
})
export class NewYear2023PageComponent implements OnInit, AfterViewInit {
  public config: SwiperConfigInterface;
  public Regulators = Regulators;
  private destroyed$ = new Subject<void>();
  public isDesktop = false;
  public isDisabledSlides$ = new BehaviorSubject<boolean>(false);
  public slideIndex$ = new BehaviorSubject<number>(0);

  @ViewChild(SwiperDirective, { static: false }) swiperRef?: SwiperDirective;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: any,
    private deviceDetectService: DeviceDetectService,
  ) { }

  ngOnInit() {
    this.config = {
      a11y: true,
      direction: 'vertical',
      slidesPerView: 1,
      mousewheel: false,
      simulateTouch: true,
      effect: 'fade',
      keyboard: true,
    };
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId) || !this.swiperRef) {
      return;
    }

    let target = null;

    /** Not need remove listener, it's landing and only one page */
    this.document.addEventListener('mousewheel', (x: WheelEvent) => {
      if (target === event.target) {
        if ((this.swiperRef as any)?.instance.activeIndex === 0) {
          this.slideByDelta(x.deltaY);

          return;
        }

        if ((this.swiperRef as any)?.instance.activeIndex === ((this.swiperRef as any)?.instance.slides.length - 1)) {
          this.slideByDelta(x.deltaY);

          return;
        }
      }

      if (target !== event.target) {
        this.slideByDelta(x.deltaY);

        target = event.target;

        return;
      }
    });
  }

  ngAfterContentInit() {
    this.deviceDetectService.isDesktop$
      .pipe(takeUntil(this.destroyed$))
      .subscribe(isDesktop => {
        if (this.isDesktop !== isDesktop) {
          this.isDesktop = isDesktop;
        }
      });
  }

  private slideByDelta(deltaY): void {
    if (deltaY < 0) {
      this.swiperRef.prevSlide();
    } else {
      this.swiperRef.nextSlide();
    }
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
