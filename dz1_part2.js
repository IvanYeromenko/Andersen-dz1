function isNum(){
    let a = prompt("Введите число");
    if(!Number(a)){
        console.log("Некорректный ввод!");
        return false;
    } else if(true){
        let b = prompt("Введите число");
        if(!Number(b)){
            console.log("Некорректный ввод!");
            return false;
        } else return console.log(`Ответ: ${Number(a) + Number(b)}, ${Number(a) / Number(b)}.`)
    }
}
isNum()