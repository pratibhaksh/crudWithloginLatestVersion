import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserPolicyComponent } from './edit-user-policy.component';

describe('EditUserPolicyComponent', () => {
  let component: EditUserPolicyComponent;
  let fixture: ComponentFixture<EditUserPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditUserPolicyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditUserPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
