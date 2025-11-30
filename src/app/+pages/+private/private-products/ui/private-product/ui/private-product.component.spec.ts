import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateProductComponent } from './private-product.component';

describe('PrivateProductComponent', () => {
  let component: PrivateProductComponent;
  let fixture: ComponentFixture<PrivateProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivateProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
