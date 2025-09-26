import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSuccessful } from './update-successful';

describe('UpdateSuccessful', () => {
  let component: UpdateSuccessful;
  let fixture: ComponentFixture<UpdateSuccessful>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateSuccessful]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSuccessful);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
