// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited,
// searched and stored on a computer.
//
//     When documents (especially pretty old ones written with a typewriter), are digitised character recognition
//     softwares often make mistakes.
//
//     Your task is correct the errors in the digitised text. You only have to handle the following mistakes:
//
//     S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

function correct(string)
{
    string = string.split('')
    for (let i = 0; i < string.length; i++) {
        if (string[i] === '5') {
            string[i] = 'S'
        } else if(string[i] === '0') {
            string[i] = 'O'
        } else if(string[i] === '1') {
            string[i] = 'I'
        }
    }
    return string.join('')
}

// console.log(correct("5TR1NG"))


// Given an array of integers, calculate the Average of these numbers.
//
//     Main challenge is to write shortest and compact function for it.
//
// For example: var a = [0, 1, 2];
// avg(a) // output should be 1
// Output of function will be also checked in tests, however most important is to write the
// shortest possible function (code length < 100). Input will always be valid.


function avg(a){return a.reduce((a, b) => a + b) / a.length}

// console.log(avg([0,1,2,3,4]))



// Given a non-empty array of integers, return the result of multiplying the values together in order.

function grow(x){
    return x.reduce((a, b) => a * b)
}

console.log(grow([4, 1, 1, 1, 4]))
