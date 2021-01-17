function numberToString(){
    let num  = 25315;
    console.log(typeof num.toString(),num.toString())
}

function stringToNumber(string){
    let str = "";
    console.log(typeof Number("123"),Number("132"));
    console.log(typeof parseInt("1325sxs90"),parseInt("1325sxs90"));
    console.log(typeof parseFloat("1325sxs90"),parseFloat("1325sxs90"));

}
stringToNumber();
numberToString();