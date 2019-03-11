import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreflightComponent } from './preflight.component';

describe('PreflightComponent', () => {
  let component: PreflightComponent;
  let fixture: ComponentFixture<PreflightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreflightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreflightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
