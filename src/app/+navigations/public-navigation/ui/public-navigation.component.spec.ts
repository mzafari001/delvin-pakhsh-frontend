import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicNavigationComponent } from './public-navigation.component';

describe('PublicNavigationComponent', () => {
  let component: PublicNavigationComponent;
  let fixture: ComponentFixture<PublicNavigationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PublicNavigationComponent],
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
    fixture = TestBed.createComponent(PublicNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
