/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Feat2Component } from './feat2.component';

describe('Feat2Component', () => {
  let component: Feat2Component;
  let fixture: ComponentFixture<Feat2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feat2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feat2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
