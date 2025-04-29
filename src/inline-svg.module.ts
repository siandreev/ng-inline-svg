import { NgModule, ModuleWithProviders } from '@angular/core';

import { InlineSVGComponent } from './inline-svg.component';
import { InlineSVGConfig } from './inline-svg.config';
import { InlineSVGDirective } from './inline-svg.directive';

@NgModule({
  imports: [InlineSVGDirective, InlineSVGComponent],
  exports: [InlineSVGDirective],
})
export class InlineSVGModule {
  static forRoot(config?: InlineSVGConfig): ModuleWithProviders<InlineSVGModule> {
    return {
      ngModule: InlineSVGModule,
      providers: [
        { provide: InlineSVGConfig, useValue: config }
      ]
    };
  }
}
