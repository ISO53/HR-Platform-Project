import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-jobposting-card',
  templateUrl: './jobposting-card.component.html',
  styleUrls: ['./jobposting-card.component.scss']
})
export class JobpostingCardComponent {
  @Input() advert: any;
}
