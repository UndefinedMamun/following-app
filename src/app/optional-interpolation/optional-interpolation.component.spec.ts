import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionalInterpolationComponent } from './optional-interpolation.component';

describe('OptionalInterpolationComponent', () => {
  let component: OptionalInterpolationComponent;
  let fixture: ComponentFixture<OptionalInterpolationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionalInterpolationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionalInterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
