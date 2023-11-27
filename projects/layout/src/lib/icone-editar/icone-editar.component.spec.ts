import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconeEditarComponent } from './icone-editar.component';

describe('IconeEditarComponent', () => {
  let component: IconeEditarComponent;
  let fixture: ComponentFixture<IconeEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconeEditarComponent]
    });
    fixture = TestBed.createComponent(IconeEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
