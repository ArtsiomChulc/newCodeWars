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

// console.log(sumArray([2, 4, 3, 9, 2, 4, 6, 1]))




// В этом ката вам нужно написать функцию, которая принимает строку и букву в качестве входных данных,
//     а затем возвращает индекс второго вхождения этой буквы в строку. Если такой буквы в строке нет,
//     то функция должна вернуть -1.
// Если буква встречается в строке только один раз, то также следует вернуть -1.

function secondSymbol(s, symbol) {
    let counter = 0
    for(let i = 0; i < s.length; i++){
        if(s[i] == symbol) {
            counter ++
            if(counter > 1) return i
        }
    }
    return -1
}

// console.log(secondSymbol('Hello world!!!','l'))



// Если указано число от 0 до 9, верните его словами.
// Вход :: 1
// Выход :: "Один".
// Если ваш язык поддерживает это, попробуйте использовать оператор switch.

// function switchItUp(number){
//     let out = '';
//     switch (number) {
//         case 1:
//            return  out = 'One'
//         case 2:
//             return out = 'Two'
//         case 3:
//             return out = 'Three'
//         case 4:
//             return out = 'Four'
//         case 5 :
//             return out = 'Five'
//         case 6:
//             return out = 'Six'
//         case 7:
//             return out = 'Seven'
//         case 8:
//             return out = 'Eight'
//         case 9:
//             return out = 'Nine'
//         case 0:
//             return out = 'Zero'
//     }
// //Write your own Code!
// }

function switchItUp(n){
    return ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][n]
}

// console.log(switchItUp(3))



// Звездолет «Энтерпрайз» столкнулся с проблемой при создании программы
// для приветствия всех, кто поднимается на борт.
// Ваша задача — исправить код и заставить программу снова работать!

function sayHello(name) {
    return `Hello, ${name}`
}

// console.log(sayHello('Captain Kirk'))




// Создайте функцию, которая принимает 2 целых числа в виде строки
// в качестве входных данных и выводит сумму (также в виде строки):

function sumStr(a,b) {
    return String(Number(a)+Number(b))
}

// console.log(sumStr('2', '3'))




// Ваша функция принимает два аргумента:
// текущий возраст отца (лет)
// текущий возраст его сына (лет)
// Подсчитайте, сколько лет назад отец был вдвое старше сына
// (или через сколько лет он будет вдвое старше). Ответ всегда больше или равен 0,
// независимо от того, был он в прошлом или в будущем.

function old(a, b) {

}