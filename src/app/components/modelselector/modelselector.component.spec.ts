import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelselectorComponent } from './modelselector.component';

describe('ModelselectorComponent', () => {
  let component: ModelselectorComponent;
  let fixture: ComponentFixture<ModelselectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModelselectorComponent]
    });
    fixture = TestBed.createComponent(ModelselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
