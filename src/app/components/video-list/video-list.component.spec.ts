/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { VideoListComponent } from './video-list.component';

describe('Component: VideoList', () => {
  it('should create an instance', () => {
    let component = new VideoListComponent();
    expect(component).toBeTruthy();
  });
});
