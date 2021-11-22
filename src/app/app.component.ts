import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'showcase';

  tabs = [
    {
      title: 'Tab 0',
      contentTemplate: '<p>this is a Tab 0 content</p>'
    },
    {
      title: 'Tab 1',
      headerTemplate: '<span class="rex-tabs-title-left-icon"><img src="assets/svgs/regular/bell.svg"></span><span>Tab 1</span>',
      contentTemplate: '<p>this is a Tab 1 content</p>'
    },
    {
      title: 'Tab 2',
      icon: 'assets/svgs/regular/clock.svg',
      iconPosition: 'left',
      contentTemplate: '<p>this is a Tab 2 content</p>'
    },
    {
      title: 'Tab 3',
      icon: 'assets/svgs/regular/envelope.svg',
      iconPosition: 'left',
      contentTemplate: '<p>this is a Tab 3 content</p>'
    },
    {
      title: 'Tab 4',
      icon: 'assets/svgs/regular/heart.svg',
      iconPosition: 'right',
      contentTemplate: '<p>this is a Tab 4 content</p>'
    }
  ];

  // tabs2 = [
  //   {
  //     title: 'Tab A',
  //     contentTemplate: '<p>this is a Tab A content</p>'
  //   },
  //   {
  //     title: 'Tab B',
  //     headerTemplate: '<span class="rex-tabs-title-left-icon"><img src="assets/svgs/regular/bell.svg"></span><span>Tab B</span>',
  //     contentTemplate: '<p>this is a Tab B content</p>'
  //   },
  //   {
  //     title: 'Tab C',
  //     icon: 'assets/svgs/regular/clock.svg',
  //     iconPosition: 'left',
  //     contentTemplate: '<p>this is a Tab C content</p>'
  //   }
  // ];

}
