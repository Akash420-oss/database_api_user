import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fashion } from './fashion';

describe('Fashion', () => {
  let component: Fashion;
  let fixture: ComponentFixture<Fashion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fashion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fashion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
