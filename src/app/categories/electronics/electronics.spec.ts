import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Electronics } from './electronics';

describe('Electronics', () => {
  let component: Electronics;
  let fixture: ComponentFixture<Electronics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Electronics]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Electronics);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
