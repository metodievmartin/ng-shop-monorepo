import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-banner',
  templateUrl: './banner.component.html',
})
export class BannerComponent {
  @Input() imageSrc = '';

  constructor() { }

}
