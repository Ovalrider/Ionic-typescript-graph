import { TestBed } from '@angular/core/testing';

import { TabService } from './tab.service';

describe('TabService', () => {
  let service: TabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('With x=9.41 y should be 6554.3212', ()=>{
    let x = -3*Math.PI + 0.01
    let y_true = Math.cosh(x)
    let xy : Map<number,number> = service.getTab()
    let y_calc : number | undefined = 0
    y_calc =xy.get(x)
    if(y_calc !== undefined){
      expect(y_calc.toFixed(1)).toBe(y_true.toFixed(1))
    }
  })
  
});
