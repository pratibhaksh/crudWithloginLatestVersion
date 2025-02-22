import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletUserPolicyComponent } from './delet-user-policy.component';

describe('DeletUserPolicyComponent', () => {
  let component: DeletUserPolicyComponent;
  let fixture: ComponentFixture<DeletUserPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeletUserPolicyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletUserPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
