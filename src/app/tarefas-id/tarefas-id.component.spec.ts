import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefasIdComponent } from './tarefas-id.component';

describe('TarefasIdComponent', () => {
  let component: TarefasIdComponent;
  let fixture: ComponentFixture<TarefasIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarefasIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarefasIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
