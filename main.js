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

// console.log(grow([4, 1, 1, 1, 4]))



function solution(start, finish)
{

    let stepsToClimb = finish-start

    let numBigJumps = Math.floor(stepsToClimb/3)

    let numSmallJumps = stepsToClimb % 3

    return numBigJumps + numSmallJumps
}

// console.log(solution(1, 12))


// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.

function validatePIN(pin) {
    //return true or false
    const n = pin.length;
    if( n !== 4 && n !== 6)
        return false;
    for (const i in pin)
        if (pin[i] > '9' || pin[i] < '0') {
            return false;
        }
    return true;
}

// console.log(validatePIN('d236'))


// Учитывая массив целых чисел, удалите наименьшее значение. Не изменяйте исходный массив/список.
// Если есть несколько элементов с одинаковым значением, удалите элемент с более низким индексом.
// Если вы получили пустой массив/список, верните пустой массив/список.
// Не меняйте порядок оставшихся элементов.

function removeSmallest(numbers) {
    let smallest;
    const newNums = [];
    numbers.forEach(function(num) {
        if (smallest > num || smallest === undefined) {
            smallest = num;
        }
    });
    const index = numbers.indexOf(smallest);
    numbers.forEach(function(n, i) {
        if (i !== index) {
            newNums.push(n);
        }
    });
    return newNums;
}

// console.log(removeSmallest([1, 3, 4, 0, 3, 6]))



// Задача
// Суммируйте все числа заданного массива (cq. list), кроме самого высокого и
// самого низкого элемента (по значению, а не по индексу!).
// Самый высокий или самый низкий элемент, соответственно, является одним элементом на каждом ребре,
// даже если их несколько с одинаковым значением.
// Помните о проверке ввода.

// Проверка ввода
// Если вместо массива задано пустое значение ( null, None, Nothing и т. д.),
// или данный массив является пустым списком или списком только с 1 элементом, вернуть 0.

function sumArray(array) {

}

console.log(sumArray([2, 4, 3, 9, 2, 4, 6, 1]))