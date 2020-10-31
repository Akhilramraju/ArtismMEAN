import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileArtComponent } from './profile-art.component';

describe('ProfileArtComponent', () => {
  let component: ProfileArtComponent;
  let fixture: ComponentFixture<ProfileArtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileArtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
