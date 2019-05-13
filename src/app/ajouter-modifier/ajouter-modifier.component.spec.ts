import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterModifierComponent } from './ajouter-modifier.component';

describe('AjouterModifierComponent', () => {
  let component: AjouterModifierComponent;
  let fixture: ComponentFixture<AjouterModifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterModifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
