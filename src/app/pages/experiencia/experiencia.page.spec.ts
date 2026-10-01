import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExperienciaPage } from './experiencia.page';

declare global {
  function beforeEach(action: () => void): void;
  function describe(description: string, specDefinitions: () => void): void;
  function it(expectation: string, assertion: () => void): void;
  function expect<T>(actual: T): { toBeTruthy(): void };
}

describe('ExperienciaPage', () => {
  let component: ExperienciaPage;
  let fixture: ComponentFixture<ExperienciaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
