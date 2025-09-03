let price = 1000;
let percentage = 40;
let producprice = price-(price*(percentage/100));

    if (producprice <= 0){
        console.log("0")
    }
    if (producprice <= 500 && producprice > 0){
        console.log(producprice + 50)
    }
    if (producprice > 500 && producprice){
        console.log(producprice - producprice*(10/100))
    }