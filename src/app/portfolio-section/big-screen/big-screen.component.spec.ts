import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigScreenComponent } from './big-screen.component';

describe('BigScreenComponent', () => {
  let component: BigScreenComponent;
  let fixture: ComponentFixture<BigScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BigScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BigScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
