import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { TimesDirective } from './times.directive';


@Component({ selector: '[appTimes]', template: `
<div *appTimes="4"> hi</div>
` })
class StubComponent {}

describe('TimesDirective', () => {
  beforeEach(async() => {
    TestBed.configureTestingModule({ declarations: [StubComponent] }).compileComponents();
  });
  it('should create an instance', () => {
    const fixture = TestBed.createComponent(StubComponent);
    const component = fixture.debugElement.componentInstance;

    const directive = new TimesDirective(component,component);
    expect(directive).toBeTruthy();
  });
});
