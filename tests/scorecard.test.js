const Scorecard = require('../docs/scorecard');

describe('Scorecard', () => {
    it('adds the scores when no bonus points', () => {
        let scorecard = new Scorecard();

        expect(scorecard.calculateScore()).toEqual(0)
        scorecard.addFrame(2, 5)
        scorecard.addFrame(3, 5)
        expect(scorecard.calculateScore()).toEqual(15)
        
    })

    it('adds bonus points when strike', () => {
        let scorecard = new Scorecard();

        scorecard.addFrame(10, 0)
        scorecard.addFrame(2, 2)
        expect(scorecard.calculateScore()).toEqual(18)
        
    })

    it('adds bonus points when two strikes in a row', () => {
        let scorecard = new Scorecard();

        scorecard.addFrame(10, 0)
        scorecard.addFrame(10, 0)
        scorecard.addFrame(2, 2)
        expect(scorecard.calculateScore()).toEqual(40)
        
    })

    it('adds bonus points for spare', () => {
        let scorecard = new Scorecard();

        scorecard.addFrame(1, 9)
        scorecard.addFrame(1, 3)
        expect(scorecard.calculateScore()).toEqual(15)
        
    })

    it('adds to 0 for gutter game', () => {
        let scorecard = new Scorecard();

        scorecard.addFrame(0, 0)
        scorecard.addFrame(0, 0)
        scorecard.addFrame(0, 0)
        scorecard.addFrame(0, 0)
        scorecard.addFrame(0, 0)
        scorecard.addFrame(0, 0)
        scorecard.addFrame(0, 0)
        scorecard.addFrame(0, 0)
        scorecard.addFrame(0, 0)
        scorecard.addFrame(0, 0)
     
        expect(scorecard.calculateScore()).toEqual(0)
        
    })

    it('adds up to 300 for perfect score', () => {
        let scorecard = new Scorecard();

        scorecard.addFrame(10, 0)
        scorecard.addFrame(10, 0)
        scorecard.addFrame(10, 0)
        scorecard.addFrame(10, 0)
        scorecard.addFrame(10, 0)
        scorecard.addFrame(10, 0)
        scorecard.addFrame(10, 0)
        scorecard.addFrame(10, 0)
        scorecard.addFrame(10, 0)
        scorecard.addFrame(10, 0)
        scorecard.addFrame(10, 10) // final bonus rolls
        
        expect(scorecard.calculateScore()).toEqual(300)
        
    })

    it('allows bonus points for spare on final frame', () => {
        let scorecard = new Scorecard();

        scorecard.addFrame(10, 0)
        scorecard.addFrame(10, 0)
        scorecard.addFrame(10, 0)
        scorecard.addFrame(10, 0)
        scorecard.addFrame(10, 0)
        scorecard.addFrame(10, 0)
        scorecard.addFrame(10, 0)
        scorecard.addFrame(10, 0)
        scorecard.addFrame(10, 0)
        scorecard.addFrame(5, 5)
        scorecard.addFrame(10, 0) // final bonus rolls
        
        expect(scorecard.calculateScore()).toEqual(275)
        
    })

    it('allows bonus points for spare on final frame', () => {
        let scorecard = new Scorecard();

        scorecard.addFrame(1, 4)
        scorecard.addFrame(4, 5)
        scorecard.addFrame(6, 4)
        scorecard.addFrame(5, 5)
        scorecard.addFrame(10, 0)
        scorecard.addFrame(0, 1)
        scorecard.addFrame(7, 3)
        scorecard.addFrame(6, 4)
        scorecard.addFrame(10, 0)
        scorecard.addFrame(2, 8)
        scorecard.addFrame(6, 0) // bonus roll because of spare
        
        expect(scorecard.calculateScore()).toEqual(133)
    })

})

