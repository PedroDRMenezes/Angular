import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tarefas2Component } from './tarefas2.component';

describe('Tarefas2Component', () => {
  let component: Tarefas2Component;
  let fixture: ComponentFixture<Tarefas2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tarefas2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tarefas2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
