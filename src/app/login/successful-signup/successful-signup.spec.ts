import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulSignup } from './successful-signup';

describe('SuccessfulSignup', () => {
  let component: SuccessfulSignup;
  let fixture: ComponentFixture<SuccessfulSignup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuccessfulSignup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessfulSignup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
