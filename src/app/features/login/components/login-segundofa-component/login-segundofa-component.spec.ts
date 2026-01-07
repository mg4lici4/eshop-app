import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSegundofaComponent } from './login-segundofa-component';

describe('LoginSegundofaComponent', () => {
  let component: LoginSegundofaComponent;
  let fixture: ComponentFixture<LoginSegundofaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginSegundofaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginSegundofaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
