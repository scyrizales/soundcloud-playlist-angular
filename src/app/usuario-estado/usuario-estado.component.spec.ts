import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioEstadoComponent } from './usuario-estado.component';

describe('UsuarioEstadoComponent', () => {
  let component: UsuarioEstadoComponent;
  let fixture: ComponentFixture<UsuarioEstadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioEstadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
