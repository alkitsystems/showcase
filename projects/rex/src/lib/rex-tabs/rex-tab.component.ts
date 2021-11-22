import { Component, HostBinding, Input, TemplateRef, AfterContentInit, ContentChildren, QueryList } from '@angular/core';
import { TypedTemplate } from '../core/typed-template';

let idx: number = 0;

@Component({
  selector: 'rex-tab',
  templateUrl: './rex-tab.html',
  host: {
      'class': 'rex-tab'
  }
})
export class TabComponent implements AfterContentInit {

  id: string = `rex-tab-${idx++}`;

  @HostBinding('style.display')
  public get isActive() {
    return this.active ? 'block' : 'none';
  }

  @Input()
  public active: boolean;

  @Input('title')
  public title: string;

  _icon: string;
  @Input() get icon(): string {
    return this._icon;
  }
  set icon(icon :string) {
    this._icon = icon;
  }

  _iconPosition: string;
  @Input() get iconPosition(): string {
    return this._iconPosition;
  }
  set iconPosition(iconPosition :string) {
    this._iconPosition = iconPosition;
  }

  private _selected = false;

  public get selected() {
    return this._selected;
  }

  contentTemplate: TemplateRef<any>;

  headerTemplate: TemplateRef<any>;

  @ContentChildren(TypedTemplate) templates: QueryList<any>;

  ngAfterContentInit() {
    this.templates.forEach((item: any) => {
      switch(item.getType()) {
        case 'header':
          this.headerTemplate = item.template;
        break;
        case 'content':
          this.contentTemplate = item.template;
        break;
        default:
          this.contentTemplate = item.template;
        break;
      }
    });
  }

}
