import { AfterContentInit, Component, OnInit } from '@angular/core';
import { DeviceDetectService, ScriptLoaderService } from '@fx-shared/services';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'section-new-year-2023-14',
  templateUrl: './section-new-year-2023-14.component.html',
  styleUrls: ['./section-new-year-2023-14.component.scss'],
})
export class SectionNewYear2023_14Component implements AfterContentInit {
  private destroyed$ = new Subject<void>();
  public isDesktop = false;

  constructor(
    private scriptLoaderService: ScriptLoaderService,
    private deviceDetectService: DeviceDetectService,
  ) { }


  ngAfterContentInit() {
    this.deviceDetectService.isDesktop$
      .pipe(takeUntil(this.destroyed$))
      .subscribe(isDesktop => {
        if (this.isDesktop !== isDesktop) {
          this.isDesktop = isDesktop;
          if (isDesktop) {
            this.scriptLoaderService.load('assets/scripts/new-year-2023-animation/new-year-2023-slide-14.js', 'module');
          }
        }
      })
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}