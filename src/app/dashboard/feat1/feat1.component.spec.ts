/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Feat1Component } from './feat1.component';

describe('Feat1Component', () => {
  let component: Feat1Component;
  let fixture: ComponentFixture<Feat1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Feat1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Feat1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
