import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioCredencialesComponent } from './usuario-credenciales-component';

describe('UsuarioCredencialesComponent', () => {
  let component: UsuarioCredencialesComponent;
  let fixture: ComponentFixture<UsuarioCredencialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuarioCredencialesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioCredencialesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
