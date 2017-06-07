import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntresseComponent } from './intresse.component';

describe('IntresseComponent', () => {
  let component: IntresseComponent;
  let fixture: ComponentFixture<IntresseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntresseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntresseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
