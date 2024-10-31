import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeballIconComponent } from './pokeball-icon.component';

describe('PokeballIconComponent', () => {
  let component: PokeballIconComponent;
  let fixture: ComponentFixture<PokeballIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokeballIconComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PokeballIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
