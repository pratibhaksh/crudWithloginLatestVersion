import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserPolicyComponent } from './add-user-policy.component';

describe('AddUserPolicyComponent', () => {
  let component: AddUserPolicyComponent;
  let fixture: ComponentFixture<AddUserPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddUserPolicyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUserPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
