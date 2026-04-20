import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoConfimacionComponent } from './dialogo-confimacion-component';

describe('DialogoConfimacionComponent', () => {
  let component: DialogoConfimacionComponent;
  let fixture: ComponentFixture<DialogoConfimacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogoConfimacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogoConfimacionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
