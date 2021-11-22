import { AfterContentInit, Component, ContentChildren, Input, QueryList, ViewEncapsulation } from '@angular/core';
import { TabComponent } from './rex-tab.component';

export enum TabsAlignment {
  Left = 'left',
  Right = 'right',
  Center = 'center'
}

@Component({
  selector: 'rex-tabs',
  templateUrl: './rex-tabs.html',
  styleUrls: ['./rex-tabs.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
      'class': 'rex-tabs'
  }
})
export class TabsComponent implements AfterContentInit {

  @Input('tabs-align')
  public align = TabsAlignment.Left;

  public get tabsAlignment(): string {
    let val: string = '';
    switch (this.align) {
      case TabsAlignment.Left:
        val = 'flex-start';
        break;
      case TabsAlignment.Right:
        val = 'flex-end';
        break;  
      default:
        val = 'center';
        break;
    }
    return val;
  }

  @ContentChildren(TabComponent) public tabs: QueryList<TabComponent>;

  public selectedTabIndex = 0;

  ngAfterContentInit() {
    setTimeout(() => {
      this.tabs.first.active = true;  
    }, 0);
  }

  public selectTab(tabIndex: number) {
    this.tabs.forEach((tab, index) => {
      tabIndex === index ? tab.active = true : tab.active = false;
    });
    this.selectedTabIndex = tabIndex;
  }

}
