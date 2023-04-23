import { TestBed } from '@angular/core/testing';

import { RecursionService } from './recursion.service';

describe('RecursionService', () => {
  let service: RecursionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecursionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('With x=0 y should be 1', ()=>{
    let x =0
    let y_true = 1
    service.getRecursion(x,1,1,1)
    let y_calc = service.yy
    if(y_calc !== undefined){
      expect(y_calc.toFixed(2)).toBe(y_true.toFixed(2))
    }  
    
  })
});
