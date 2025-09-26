import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysDeals } from './todays-deals';

describe('TodaysDeals', () => {
  let component: TodaysDeals;
  let fixture: ComponentFixture<TodaysDeals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodaysDeals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodaysDeals);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
