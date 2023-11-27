import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoAdicionarComponent } from './botao-adicionar.component';

describe('BotaoAdicionarComponent', () => {
  let component: BotaoAdicionarComponent;
  let fixture: ComponentFixture<BotaoAdicionarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotaoAdicionarComponent]
    });
    fixture = TestBed.createComponent(BotaoAdicionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
