import { TestBed } from '@angular/core/testing';

import { RouterserviceService } from './routerservice.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';

describe('RouterserviceService', () => {
  let service: RouterserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        RouterModule
      ]
    })
    .compileComponents();
    service = TestBed.inject(RouterserviceService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
