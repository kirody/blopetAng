import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RazasGatoComponent } from './razas-gato.component';

describe('RazasGatoComponent', () => {
  let component: RazasGatoComponent;
  let fixture: ComponentFixture<RazasGatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RazasGatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RazasGatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
