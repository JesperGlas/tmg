import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TjansterComponent } from './tjanster.component';

describe('TjansterComponent', () => {
  let component: TjansterComponent;
  let fixture: ComponentFixture<TjansterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TjansterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TjansterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
