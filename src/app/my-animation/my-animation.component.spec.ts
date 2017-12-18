import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAnimationComponent } from './my-animation.component';

describe('MyAnimationComponent', () => {
  let component: MyAnimationComponent;
  let fixture: ComponentFixture<MyAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
