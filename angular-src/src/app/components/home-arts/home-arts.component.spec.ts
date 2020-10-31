import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeArtsComponent } from './home-arts.component';

describe('HomeArtsComponent', () => {
  let component: HomeArtsComponent;
  let fixture: ComponentFixture<HomeArtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeArtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeArtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
