import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordSection } from './password-section';

describe('PasswordSection', () => {
  let component: PasswordSection;
  let fixture: ComponentFixture<PasswordSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
