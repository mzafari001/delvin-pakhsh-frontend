import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateNavigationComponent } from './private-navigation.component';

describe('PrivateNavigationComponent', () => {
  let component: PrivateNavigationComponent;
  let fixture: ComponentFixture<PrivateNavigationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PrivateNavigationComponent],
      imports: [
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
