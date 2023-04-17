import Bird from "./bird"
import HoofedAnimal from "./hoofed"
import Mammal from "./mammal"


describe('LAB6 testing', () =>{
    let bird : Bird
    let hoof : HoofedAnimal
    let mamm : Mammal
    beforeEach(() =>{
        bird = new Bird("BIRD")
        hoof = new HoofedAnimal("BISON")
        mamm = new Mammal("WOLF")
    })
    it('should be able to create Bird', () => {
        expect(bird).toBeTruthy()
    })
    it('should be able to create HoofedAnimal', () => {
        expect(hoof).toBeTruthy()
    })
    it('should be able to create Mammal', () => {
        expect(mamm).toBeTruthy()
    })
    it('Method say() should work properly', () => {
        expect(mamm.say()).toBe("I am a WOLF")
        expect(hoof.say()).toBe("I am a BISON")
        expect(bird.say()).toBe("I am a BIRD")
    })
    it('Method fly() should work properly', () => {
        expect(bird.fly()).toBe("I am flying!")
    })
    it('Method run() should work properly', () => {
        expect(mamm.run()).toBe("I am running!")
        expect(hoof.run()).toBe("I am running!")
    })
    it('Method feed() should work properly', () => {
        expect(mamm.feed()).toBe("I am feeding!")
    })

})