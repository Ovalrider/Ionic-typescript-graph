import { QuadPrism } from "./quadprism"


describe('QuadPrism testing', () =>{
    let quadPrism : QuadPrism
    // write spec that for quadPrism
    beforeEach(() =>{
        quadPrism = new QuadPrism("quadPrism", 5, 10)
    })
    it('should be able to create quadPrism', () => {
        expect(quadPrism).toBeTruthy()
    })
    it('Testing quadPrism with h=5 and a=10', () => {
        quadPrism.calc_volume()
        let s = quadPrism.V
        let p = 10* 10 * 5
        expect(s).toBe(p)

    })

})