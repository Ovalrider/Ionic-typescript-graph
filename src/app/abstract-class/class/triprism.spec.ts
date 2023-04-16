import { TriPrism } from  "./triprism";


describe('TriPrism testing', () =>{
    let triPrism : TriPrism
    beforeEach(() =>{
        triPrism = new TriPrism("TriPrism", 5, 10)
    })
    it('should be able to create TriPrism', () => {
        expect(triPrism).toBeTruthy()
    })
    it('Testing TriPrism with h=5 and S=10', () => {
        triPrism.calc_volume()
        let s = triPrism.V
        let p = 10 * 5
        expect(s).toBe(p)

    })

})