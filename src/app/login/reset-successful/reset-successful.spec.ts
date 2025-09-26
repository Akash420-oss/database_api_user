import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetSuccessful } from './reset-successful';

describe('ResetSuccessful', () => {
  let component: ResetSuccessful;
  let fixture: ComponentFixture<ResetSuccessful>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResetSuccessful]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetSuccessful);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
