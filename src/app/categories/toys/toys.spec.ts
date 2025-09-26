import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Toys } from './toys';

describe('Toys', () => {
  let component: Toys;
  let fixture: ComponentFixture<Toys>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Toys]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Toys);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
