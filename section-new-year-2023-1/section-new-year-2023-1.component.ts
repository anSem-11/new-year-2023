import { Component, OnDestroy, OnInit } from '@angular/core';
import { DeviceDetectService, FxRestrictionService, ScriptLoaderService } from '@fx-shared/services';
import { Regulators } from '@fx-project-shared/models';
import { Subject } from 'rxjs';
import { takeUntil, tap, take } from 'rxjs/operators';
import { RestrictionState } from '@fx-server/models';

@Component({
  selector: 'section-new-year-2023-1',
  templateUrl: './section-new-year-2023-1.component.html',
  styleUrls: ['./section-new-year-2023-1.component.scss'],
})
export class SectionNewYear2023_1Component implements OnInit, OnDestroy {
  private destroyed$ = new Subject<void>();
  public isPaddingAdded = false;
  public Regulators = Regulators;
  public isDesktop = false;


  constructor(
    private scriptLoaderService: ScriptLoaderService,
    private deviceDetectService: DeviceDetectService,
    private readonly restrictionService: FxRestrictionService,
  ) { }

  private toggleIsPaddingAdded(): void {
    this.restrictionService
      .getRestrictionState$()
      .pipe(
        take(1),
        tap((data: RestrictionState) => {
          if (data.regulator === Regulators.FSCM || data.regulator === Regulators.KNN) {
            this.isPaddingAdded = true;
          } else {
            this.isPaddingAdded = false;
          }
        }),
        takeUntil(this.destroyed$),
      )
      .subscribe();
  }

  ngAfterContentInit() {
    this.deviceDetectService.isDesktop$
      .pipe(takeUntil(this.destroyed$))
      .subscribe(isDesktop => {
        if (this.isDesktop !== isDesktop) {
          this.isDesktop = isDesktop;
          if (isDesktop) {
            this.scriptLoaderService.load('assets/scripts/new-year-2023-animation/new-year-2023-slide-1.js', 'module');
          }
        }
      })
  }

  ngOnInit(): void {
    this.toggleIsPaddingAdded();
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}