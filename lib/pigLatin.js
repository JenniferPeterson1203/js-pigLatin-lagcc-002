"use strict";

const pigLatin = (english) => {

//store the vowels in an array to search if the letter within the string includes any of the vowel letters when looped through
const vowels = ["a", "e", "i", "o", "u"];

  return english
    .split(" ")
    .map((word) => {
      if (!word) {
        return word;
      }

      if (vowels.includes(word[0])) {
        return word + "ay";
      }

      let prefix = "";
      let index = 0;

      while (index < word.length && !vowels.includes(word[index])) {
        prefix += word[index];

        if (word[index] === "q" && word[index + 1] === "u") {
          prefix += "u";
          index += 2;
          continue;
        }

        index += 1;
      }

      return word.slice(index) + prefix + "ay";
    })
    .join(" ");
};

module.exports = pigLatin;
