// actual test


// require function for 2 NPM modules
// 1- assertion library
// 2- Phrase obj itself
let assert = require("assert");
let Phrase = require("../index.js");


// functions from assert
// 1- describe
// 2- it
describe("Phrase", function() {

describe("#palindrome", function() {

    it("should return false for a non-palindrome", function() {
      let nonPalindrome = new Phrase("apple");
      assert(!nonPalindrome.palindrome());
    });

    it("should return true for a plain palindrome", function() {
      let plainPalindrome = new Phrase("racecar");
      assert(plainPalindrome.palindrome());
    });

// a couple of pending (some later made unpending) test
// which are placeholders/reminders fr tests yet to write
    it("should return true for a mixed-case palindrome", function() {
      let mixedCasePalindrome = new Phrase("RaceCar");
      assert(mixedCasePalindrome.palindrome());
    });

    it("should return true for a palindrome with punctuation", function() {
      let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
      assert(punctuatedPalindrome.palindrome());
    });


  });
});


