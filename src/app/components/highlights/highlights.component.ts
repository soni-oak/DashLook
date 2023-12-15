import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { connect, interval, map, switchMap, takeUntil, timer } from 'rxjs';
import { Model } from 'src/app/Models';
import { Stat } from 'src/app/Stat';
import { HighlightService } from 'src/app/services/highlight.service';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.css']
})
export class HighlightsComponent implements OnInit {

  stats: Stat[] = [];
 
  models: Model[] = []; 
  selectedModel : string;
  intervalId: any = null ;

  constructor(private service: HighlightService){}

   ngOnInit() {
     this.getModels().then(res => {
      this.selectedModel = this.models[0].displayName;
      this.getNewHighlights();
      //this.scheduleCall();
      
     }
    );
  }

  

  getNewHighlights(): void{
    
    const data = {
      Model: this.selectedModel,
      Company: "paytm"
    }
    console.log(data);
    const arrayOfStats: Stat[] = [];

    this.service.getHighlights(data).subscribe(response => {
      const arrayOfStats: Stat[] = [];
      for (const [key, value] of Object.entries(response)) {
        const stat = new Stat(key, value);
        arrayOfStats.push(stat);
      }
      this.stats = arrayOfStats;
    });
    return;
  }

  async getModels(): Promise<void> {
    try {
      const models = await this.service.getModels().toPromise();
      console.log(models);
      this.models = models!;
      
    } catch (error) {
      // Handle errors here
      console.error(error);
    }
  }

  onSelectionChange() {
    this.getNewHighlights();
  }
  

  
  scheduleCall(){
    const timerObservable = timer(0, 20000); 

      const subscription = timerObservable.pipe(
        map(() => this.getNewHighlights())
      ).subscribe();
  }


}
