import { TestBed } from '@angular/core/testing';
import { LangService } from './lang.service';

describe('LangService', () => {
  let service: LangService;

  beforeEach(() => {
    localStorage.removeItem('portfolio-lang');
    TestBed.configureTestingModule({});
    service = TestBed.inject(LangService);
  });

  afterEach(() => {
    localStorage.removeItem('portfolio-lang');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should default to a valid language (pt or en)', () => {
    expect(['pt', 'en']).toContain(service.lang());
  });

  it('should switch to the language passed to set()', () => {
    service.set('en');
    expect(service.lang()).toBe('en');

    service.set('pt');
    expect(service.lang()).toBe('pt');
  });

  it('should flip between pt and en on toggle()', () => {
    service.set('pt');
    service.toggle();
    expect(service.lang()).toBe('en');

    service.toggle();
    expect(service.lang()).toBe('pt');
  });

  it('should persist the chosen language to localStorage', () => {
    service.set('en');
    expect(localStorage.getItem('portfolio-lang')).toBe('en');
  });
});
