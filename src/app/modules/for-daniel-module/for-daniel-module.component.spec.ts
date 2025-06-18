import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForDanielModuleComponent } from './for-daniel-module.component';

describe('ForDanielModuleComponent', () => {
  let component: ForDanielModuleComponent;
  let fixture: ComponentFixture<ForDanielModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForDanielModuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForDanielModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
