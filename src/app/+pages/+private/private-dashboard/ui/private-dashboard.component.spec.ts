import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateDashboardComponent } from './private-dashboard.component';

describe('PrivateDashboardComponent', () => {
  let component: PrivateDashboardComponent;
  let fixture: ComponentFixture<PrivateDashboardComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
