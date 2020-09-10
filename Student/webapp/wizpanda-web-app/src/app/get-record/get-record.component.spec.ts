import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRecordComponent } from './get-record.component';

describe('GetRecordComponent', () => {
  let component: GetRecordComponent;
  let fixture: ComponentFixture<GetRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
