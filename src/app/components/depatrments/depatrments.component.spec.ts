import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepatrmentsComponent } from './depatrments.component';

describe('DepatrmentsComponent', () => {
  let component: DepatrmentsComponent;
  let fixture: ComponentFixture<DepatrmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepatrmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepatrmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
