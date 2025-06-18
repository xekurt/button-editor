import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationModuleComponent } from './documentation-module.component';

describe('DocumentationModuleComponent', () => {
  let component: DocumentationModuleComponent;
  let fixture: ComponentFixture<DocumentationModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocumentationModuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentationModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
