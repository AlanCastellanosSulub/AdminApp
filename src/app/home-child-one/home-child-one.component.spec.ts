import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeChildOneComponent } from './home-child-one.component';

describe('HomeChildOneComponent', () => {
  let component: HomeChildOneComponent;
  let fixture: ComponentFixture<HomeChildOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeChildOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeChildOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
