import { TestBed } from '@angular/core/testing';

import { SubCatagoryService } from './sub-catagory.service';

describe('SubCatagoryService', () => {
  let service: SubCatagoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubCatagoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
