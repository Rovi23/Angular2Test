/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { MyNewComponentComponent } from './my-new-component.component';

describe('Component: MyNewComponent', () => {
  it('should create an instance', () => {
    let component = new MyNewComponentComponent();
    expect(component).toBeTruthy();
  });
});
