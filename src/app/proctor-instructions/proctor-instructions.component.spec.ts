import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProctorInstructionsComponent } from './proctor-instructions.component';

describe('ProctorInstructionsComponent', () => {
  let component: ProctorInstructionsComponent;
  let fixture: ComponentFixture<ProctorInstructionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProctorInstructionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProctorInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
