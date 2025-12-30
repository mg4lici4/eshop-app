import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaRegistroComponent } from './persona-registro-component';

describe('PersonaRegistroComponent', () => {
  let component: PersonaRegistroComponent;
  let fixture: ComponentFixture<PersonaRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonaRegistroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonaRegistroComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
