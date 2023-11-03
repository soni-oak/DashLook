import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Model } from 'src/app/Models';
import { ModelselectorService } from 'src/app/services/modelselector.service';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-modelselector',
  templateUrl: './modelselector.component.html',
  styleUrls: ['./modelselector.component.css']
})
export class ModelselectorComponent implements OnInit {
  options: Model[] = []; 
  public selectedModel: string = 'AllModels';
  
  @Output() emitSelectedModel = new EventEmitter();
  constructor(private service: ModelselectorService){}

  ngOnInit(): void {
   this.service.getModels().subscribe(
      models => {
        console.log(models);
        this.options = models;
      }
    );
  }


  onSelectionChange(){ 
    
    this.emitSelectedModel.emit(this.selectedModel); 
  } 
  
}
