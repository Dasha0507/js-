let arr = [11, 23, 67, 56, 98];
console.log("Исходный массив "+ " " + arr);
let result = arr.map(function(item, index) {
    return item * Math.pow(10, index);
});
  
let decimal = result.reduce((sum, current) => sum + current, 0);
console.log("Десятичное число "+ " " + decimal);
let bin = decimal.toString(2);
console.log(bin);


/*Не знаю почему, но оно не работает
//let sistem = prompt("Введите систему счисления, в которую перевести получившееся число", 2);
 
// const transferBin = (num, cc) => {
    // let str = ""; //строка для записи числа(остатки)
//     while(num > 0) {// пока число больше нуля мы делим и остаток от деления записываем в строку
//         let ost = num % cc;
//         str = String(ost) + str;
//         num / cc;
//     }
//     console.log(str);
// }
 
// transferBin(decimal, sistem);//на этом этапе все ломается*/