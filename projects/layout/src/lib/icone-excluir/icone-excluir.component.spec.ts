import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconeExcluirComponent } from './icone-excluir.component';

describe('IconeExcluirComponent', () => {
  let component: IconeExcluirComponent;
  let fixture: ComponentFixture<IconeExcluirComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconeExcluirComponent]
    });
    fixture = TestBed.createComponent(IconeExcluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
