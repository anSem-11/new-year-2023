import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NewYear2023PageComponent } from 'app/pages/new-year-2023-page/new-year-2023-page.component';
import { SectionNewYear2023_1Component } from 'app/sections/section-new-year-2023-1/section-new-year-2023-1.component';
import { SectionNewYear2023_2Component } from 'app/sections/section-new-year-2023-2/section-new-year-2023-2.component';
import { SectionNewYear2023_3Component } from 'app/sections/section-new-year-2023-3/section-new-year-2023-3.component';
import { SectionNewYear2023_4Component } from 'app/sections/section-new-year-2023-4/section-new-year-2023-4.component';
import { SectionNewYear2023_6Component } from 'app/sections/section-new-year-2023-6/section-new-year-2023-6.component';
import { SectionNewYear2023_7Component } from 'app/sections/section-new-year-2023-7/section-new-year-2023-7.component';
import { SectionNewYear2023_8Component } from 'app/sections/section-new-year-2023-8/section-new-year-2023-8.component';
import { SectionNewYear2023_9Component } from 'app/sections/section-new-year-2023-9/section-new-year-2023-9.component';
import { SectionNewYear2023_10Component } from 'app/sections/section-new-year-2023-10/section-new-year-2023-10.component';
import { SectionNewYear2023_11Component } from 'app/sections/section-new-year-2023-11/section-new-year-2023-11.component';
import { SectionNewYear2023_15Component } from 'app/sections/section-new-year-2023-15/section-new-year-2023-15.component';

import { SectionNewYear2023_5Component } from '../../sections/section-new-year-2023-5/section-new-year-2023-5.component';
import { SectionNewYear2023_12Component } from '../../sections/section-new-year-2023-12/section-new-year-2023-12.component';
import { SectionNewYear2023_13Component } from '../../sections/section-new-year-2023-13/section-new-year-2023-13.component';
import { SectionNewYear2023_14Component } from '../../sections/section-new-year-2023-14/section-new-year-2023-14.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    NewYear2023PageComponent,
    SectionNewYear2023_1Component,
    SectionNewYear2023_2Component,
    SectionNewYear2023_3Component,
    SectionNewYear2023_4Component,
    SectionNewYear2023_5Component,
    SectionNewYear2023_6Component,
    SectionNewYear2023_7Component,
    SectionNewYear2023_8Component,
    SectionNewYear2023_9Component,
    SectionNewYear2023_10Component,
    SectionNewYear2023_11Component,
    SectionNewYear2023_12Component,
    SectionNewYear2023_13Component,
    SectionNewYear2023_14Component,
    SectionNewYear2023_15Component,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    SharedModule,
    NewYear2023PageComponent,
    SectionNewYear2023_1Component,
    SectionNewYear2023_2Component,
    SectionNewYear2023_3Component,
    SectionNewYear2023_4Component,
    SectionNewYear2023_5Component,
    SectionNewYear2023_6Component,
    SectionNewYear2023_7Component,
    SectionNewYear2023_8Component,
    SectionNewYear2023_9Component,
    SectionNewYear2023_10Component,
    SectionNewYear2023_11Component,
    SectionNewYear2023_12Component,
    SectionNewYear2023_13Component,
    SectionNewYear2023_14Component,
    SectionNewYear2023_15Component,
  ],
})
export class NewYear2023Module { }
