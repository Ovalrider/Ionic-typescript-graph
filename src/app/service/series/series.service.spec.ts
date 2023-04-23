import { TestBed } from '@angular/core/testing';

import { SeriesService } from './series.service';

describe('SeriesService', () => {
  let service: SeriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('With x=0 y should be 1', ()=>{
    let x =0
    let y_true = 1
    let y_calc =service.getSeries(x)
    if(y_calc !== undefined){
      expect(y_calc.toFixed(2)).toBe(y_true.toFixed(2))
    }  
    
  })
});
