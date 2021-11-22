import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './rex-tabs.component';
import { TabComponent } from './rex-tab.component';
import { TypedTemplateModule } from '../core/typed-template';

@NgModule({
  imports: [
    CommonModule,
    TypedTemplateModule
  ],
  declarations: [
    TabsComponent,
    TabComponent
  ],
  exports: [
    TabsComponent,
    TabComponent,
    TypedTemplateModule
  ]
})
export class TabsModule {
}
