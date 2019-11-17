import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpBookComponent } from './op-book.component';

describe('OpBookComponent', () => {
  let component: OpBookComponent;
  let fixture: ComponentFixture<OpBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
