import { Component, Input } from '@angular/core';
import { Stat } from 'src/app/Stat';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent {
@Input() stat: Stat;
}
