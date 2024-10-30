import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInfoComponent } from './card-info.component';
import { describe, beforeEach, it } from 'node:test';

describe('CardInfoComponent', () => {
  let component: CardInfoComponent;
  let fixture: ComponentFixture<CardInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardInfoComponent],
    });
    fixture = TestBed.createComponent(CardInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
