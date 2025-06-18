import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroundModuleComponent } from './playground-module.component';

describe('PlaygroundModuleComponent', () => {
  let component: PlaygroundModuleComponent;
  let fixture: ComponentFixture<PlaygroundModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaygroundModuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaygroundModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
