import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalesListadoComponent } from './animales-listado.component';

describe('AnimalesListadoComponent', () => {
  let component: AnimalesListadoComponent;
  let fixture: ComponentFixture<AnimalesListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalesListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalesListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
