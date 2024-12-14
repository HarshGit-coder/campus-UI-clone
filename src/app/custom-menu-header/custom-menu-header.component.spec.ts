import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomMenuHeaderComponent } from './custom-menu-header.component';

describe('CustomMenuHeaderComponent', () => {
  let component: CustomMenuHeaderComponent;
  let fixture: ComponentFixture<CustomMenuHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomMenuHeaderComponent]
    });
    fixture = TestBed.createComponent(CustomMenuHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
