/* https://www.codewars.com/kata/525f47c79f2f25a4db000025/train/javascript

Write a function that accepts a string, and returns true if it is in the form of a phone number.
Assume that any integer from 0-9 in any of the spots will produce a valid phone number.

Only worry about the following format:
(123) 456-7890 (don't forget the space after the close parentheses)

Examples:

validPhoneNumber("(123) 456-7890")  =>  returns true
validPhoneNumber("(1111)555 2345")  => returns false
validPhoneNumber("(098) 123 4567")  => returns false */

function validPhoneNumber(phoneNumber){
    let leftParenthesis = phoneNumber.indexOf(")")
    if (phoneNumber.length === 14 && phoneNumber[1] > 0) {
      if (leftParenthesis === 4) {
        return true
      }
    }
    else {
    return false
    }
  } 