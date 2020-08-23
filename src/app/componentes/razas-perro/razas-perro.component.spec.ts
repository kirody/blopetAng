import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RazasPerroComponent } from './razas-perro.component';

describe('RazasPerroComponent', () => {
  let component: RazasPerroComponent;
  let fixture: ComponentFixture<RazasPerroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RazasPerroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RazasPerroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
