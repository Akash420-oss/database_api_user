import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAccountSuccessful } from './delete-account-successful';

describe('DeleteAccountSuccessful', () => {
  let component: DeleteAccountSuccessful;
  let fixture: ComponentFixture<DeleteAccountSuccessful>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteAccountSuccessful]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteAccountSuccessful);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
