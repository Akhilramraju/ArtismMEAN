import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtTilesComponent } from './art-tiles.component';

describe('ArtTilesComponent', () => {
  let component: ArtTilesComponent;
  let fixture: ComponentFixture<ArtTilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtTilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
