'use strict';

const repeatedWord = require('../repeated-word');

describe('repeated Word', () => {
    it('return the first repeated word (a)', () => {
        expect(repeatedWord("Once upon a time, there was a brave princess who...")).toEqual('a');
    });
    it('return the first repeated word (it)', () => {
        expect(repeatedWord("It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only")).toEqual('it');
    });
    it('return the first repeated word (summer)', () => {
        expect(repeatedWord("It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York")).toEqual('summer');
    });
    it('return null', () => {
        expect(repeatedWord("My name Is omar")).toEqual(null);
    });
    it('return the first repeated word (summer)', () => {
        expect(()=>{
            repeatedWord(1234556)
        }).toThrow();
    });
});