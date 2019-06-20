import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaBoxComponent } from './area-box.component';

describe('AreaBoxComponent', () => {
  let component: AreaBoxComponent;
  let fixture: ComponentFixture<AreaBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
