import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeChildTwoComponent } from './home-child-two.component';

describe('HomeChildTwoComponent', () => {
  let component: HomeChildTwoComponent;
  let fixture: ComponentFixture<HomeChildTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeChildTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeChildTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
