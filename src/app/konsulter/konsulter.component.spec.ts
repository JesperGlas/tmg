import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KonsulterComponent } from './konsulter.component';

describe('KonsulterComponent', () => {
  let component: KonsulterComponent;
  let fixture: ComponentFixture<KonsulterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KonsulterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KonsulterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
