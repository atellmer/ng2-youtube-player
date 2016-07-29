/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { VideoDetailComponent } from './video-detail.component';

describe('Component: VideoDetail', () => {
  it('should create an instance', () => {
    let component = new VideoDetailComponent();
    expect(component).toBeTruthy();
  });
});
