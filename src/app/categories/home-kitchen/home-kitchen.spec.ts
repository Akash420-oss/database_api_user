import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeKitchen } from './home-kitchen';

describe('HomeKitchen', () => {
  let component: HomeKitchen;
  let fixture: ComponentFixture<HomeKitchen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeKitchen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeKitchen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
