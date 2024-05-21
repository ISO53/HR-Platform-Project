import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-jobpost-cart',
  templateUrl: './jobpost-cart.component.html',
  styleUrls: ['./jobpost-cart.component.scss'],

})
export class JobpostCartComponent {
  @Input() advert: any;
}
