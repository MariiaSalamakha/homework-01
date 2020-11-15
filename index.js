
const MILK = 15.678;
const CHEESE = 123.965;
const ICE = 90.2345;

let maxPrice = Math.max(MILK,CHEESE,ICE);
document.writeln(`Найвища ціна за товар становить ${maxPrice} грн <br>`);

let minPrice = Math.min(MILK,CHEESE,ICE);
document.writeln(`Найнижча ціна за товар становить ${minPrice} грн <br>`);

let totalPrice = MILK + CHEESE + ICE;
document.writeln(`Загальна вартість всіх товарів: ${totalPrice} грн <br>`);

let totalPriceWithoutPennies = Math.floor(MILK) + Math.floor(CHEESE) + Math.floor(ICE);
document.writeln(`Загальна вартість всіх товарів заокруглена в меншу сторону (без врахування копійок): ${totalPriceWithoutPennies} грн <br>`);

let totalPriceUpToHundredth = Math.ceil(totalPriceWithoutPennies / 100) * 100;
document.writeln(`Загальна вартість всіх товарів заокруглена до сотень: ${totalPriceUpToHundredth} грн <br>`);

if ((totalPriceWithoutPennies % 2) === 0) {
    document.writeln(`${totalPriceWithoutPennies} грн - це парне число <br>`);
} else {
    document.writeln(`Число непарне <br>`);
}

let restOfTheMoney = 500 - (MILK + CHEESE + ICE);
document.writeln(`Сума решти при оплаті товарів: ${restOfTheMoney} грн <br>`);

let average = ( (MILK+CHEESE+ICE) / 3).toFixed(2);
document.writeln(`Середнє значення цін становить: ${average} грн <br>`);
 
let discount = Math.floor(Math.random() * 10);
document.writeln(`Знижка становить ${discount} % <br>`);

let monetaryDiscount = ((totalPrice * discount) / 100).toFixed(2);
document.writeln(`Сума знижки в грошовому вимірі: ${monetaryDiscount} грн <br>`);

let priceWithDiscount = (totalPrice - (totalPrice * discount / 100)).toFixed(2);
document.writeln(`Сума оплати із врахуванням знижки становить ${priceWithDiscount} грн <br>`);

let cost = (totalPrice / 2).toFixed(2);
document.writeln(`Собівартість товарів становить: ${cost} грн <br>`);

let netProfit = cost - monetaryDiscount;
document.writeln(`Чистий прибуток становить: ${netProfit} грн <br>`);
