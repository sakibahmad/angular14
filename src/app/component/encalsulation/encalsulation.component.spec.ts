import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncalsulationComponent } from './encalsulation.component';

describe('EncalsulationComponent', () => {
  let component: EncalsulationComponent;
  let fixture: ComponentFixture<EncalsulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncalsulationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncalsulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
