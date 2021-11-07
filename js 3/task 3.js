const symbolWrap = () => {
    let str = prompt("Введите строку", "Кончается лето, кончается лето. И солнце не светит? А прячется где-то!");
    for(const char of str) {
        console.log(char)
    }
}
 
const wordWrap = () => {
    let str = prompt("Введите строку", "Кончается лето, кончается лето. И солнце не светит? А прячется где-то!");
    let arr = str.split(" ");
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
 
const runToString = arr => {
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
 
const sentenceWrap = () => {
    let str = prompt("Введите строку", "Кончается лето, кончается лето. И солнце не светит? А прячется где-то!");
    let arr = str.split(".").join('*/').split('!').join('*/').split('?').join('*/').split('*/');
    runToString(arr);
} 
 
const getSentence = () => {
    let str = prompt("Введите строку", "Кончается лето, кончается лето. И солнце не светит? А прячется где-то!");
    alert(str);
}
 
const startWork  = () => {
    let choice = prompt(`Введите номер нужной Вам функции:
    1. перенос по слову
    2. перенос по символу
    3. перенос по предложению
    4. показат предложение целиком`, 1);
   
    switch (choice) {
    //   case '0':
    case '1':
        alert("Вы выбрали перенос по слову :");
        wordWrap();
        break;
 
    case '2':
        alert("Вы выбрали перенос по символу: ");
        symbolWrap();
        break;
    case '3':
        alert("Вы выбрали перенос по предложению: ");
        sentenceWrap();
        break;
    case '4': alert("Вот ваше предложение: ");
            getSentence();
            break;
    default:
        alert( 'Неизвестное значение' );
    }
 
}
 
startWork();