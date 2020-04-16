import { StrengthPipe } from "./strength.pipe"

describe('StrengthPipe', () => {

    it('should display (weak) if strength is 5', () => {

        // Arrange
        let pipe = new StrengthPipe();

        // Act
        const weak = pipe.transform(5)
        
        // Assert
        expect(weak).toEqual('5 (weak)')

    })

    it('should display (strong) if strength is 10', () => {

        let pipe = new StrengthPipe();

        let strong = pipe.transform(10) 

        expect(strong).toEqual('10 (strong)')

    })

    it('should display (unbelievable) if strength more than 20', () => {

        let pipe = new StrengthPipe();

        let unbelievable = pipe.transform(20) 

        expect(unbelievable).toEqual('20 (unbelievable)')

    })

})