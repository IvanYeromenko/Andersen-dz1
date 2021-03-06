let a = prompt("Введите число");
let b = prompt("Введите число");
if(Number(a) && Number(b)){
    console.log(Number(a).toString(Number(b)));
} else {
    console.log("Некорректный ввод!");
}