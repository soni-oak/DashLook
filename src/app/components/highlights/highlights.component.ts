import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Stat } from 'src/app/Stat';
import { HighlightService } from 'src/app/services/highlight.service';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.css']
})
export class HighlightsComponent implements OnInit {
  stats: Stat[] = [];
  @Input() selectedModel: string = '';

  constructor(private service: HighlightService){}

  ngOnInit(): void {
    this.getNewHighlights();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.getNewHighlights();
  }

  getNewHighlights(){
    const data = {
      Model: this.selectedModel,
      Company: "PayTM"
    }
    const arrayOfStats: Stat[] = [];

    this.service.getHighlights(data).subscribe(response => {
      const arrayOfStats: Stat[] = [];
      for (const [key, value] of Object.entries(response)) {
        const stat = new Stat(key, value);
        arrayOfStats.push(stat);
      }
      this.stats = arrayOfStats;
      // Here you can use the arrayOfStats as needed within the subscription block
    });
  }

}
