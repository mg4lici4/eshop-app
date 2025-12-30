import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioGenerarSecretoComponent } from './usuario-generar-secreto-component';

describe('UsuarioGenerarSecretoComponent', () => {
  let component: UsuarioGenerarSecretoComponent;
  let fixture: ComponentFixture<UsuarioGenerarSecretoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuarioGenerarSecretoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioGenerarSecretoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
