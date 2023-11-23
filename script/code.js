// function
const btnRes = document.querySelector("[data-btn]")


let input = document.querySelector("[data-word]")

function isPalindrome(word) {
    let output = document.querySelector("[data-res]")
    let reversed = word.split("").reverse().join("");
  if (word === reversed) {
    output.textContent = `${word} is a Palindrome!`;
  } else if (word != reversed) {
    output.textContent = `${word} is not a palindrome 😔`;
  }// else if (word = "") {
//     output.textContent = "";
//   }
}
// isPalindrome('racecar');

btnRes.addEventListener('click',()=> isPalindrome(input.value))