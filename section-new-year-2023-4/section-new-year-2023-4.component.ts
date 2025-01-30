import { Component, OnInit } from '@angular/core';
import { Regulators } from '@fx-project-shared/models';
import { RestrictionState } from '@fx-server/models';
import { FxRestrictionService } from '@fx-shared/services';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'section-new-year-2023-4',
  templateUrl: './section-new-year-2023-4.component.html',
  styleUrls: ['./section-new-year-2023-4.component.scss'],
})
export class SectionNewYear2023_4Component implements OnInit {
  private destroyed$ = new Subject<void>();
  public Regulators = Regulators;
  public isEliteHidden: boolean = false;

  constructor(
    private readonly restrictionService: FxRestrictionService,
  ) { }

  private toggleIsEliteHidden() {
    this.restrictionService
      .getRestrictionState$()
      .pipe(
        tap((data: RestrictionState) => {
          if (['cn', 'tw', 'mo', 'hk'].includes(data.country.toLowerCase())) {
            this.isEliteHidden = true;
          } else {
            this.isEliteHidden = false;
          }
        }),
        takeUntil(this.destroyed$),
      )
      .subscribe();
  }

  ngOnInit(): void {
    this.toggleIsEliteHidden();
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}