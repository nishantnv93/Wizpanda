import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveReordComponent } from './save-reord.component';

describe('SaveReordComponent', () => {
  let component: SaveReordComponent;
  let fixture: ComponentFixture<SaveReordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveReordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveReordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
