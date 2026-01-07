import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioSegundoFAComponent } from './usuario-segundofa-component';

describe('UsuarioGenerarSecretoComponent', () => {
  let component: UsuarioSegundoFAComponent;
  let fixture: ComponentFixture<UsuarioSegundoFAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuarioSegundoFAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioSegundoFAComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
