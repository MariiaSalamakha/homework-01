const priceMilk = 15.678;
const priceCheese = 123.965;
const priceIce = 90.2345;

const maxPrice = Math.max(priceMilk, priceCheese, priceIce);
document.writeln(`Найвища ціна за товар становить ${maxPrice} грн <br>`);

const minPrice = Math.min(priceMilk, priceCheese, priceIce);
document.writeln(`Найнижча ціна за товар становить ${minPrice} грн <br>`);

const totalPrice = priceMilk + priceCheese + priceIce;
document.writeln(`Загальна вартість всіх товарів: ${totalPrice} грн <br>`);

const totalPriceWithoutPennies = Math.floor(priceMilk) + Math.floor(priceCheese) + Math.floor(priceIce);
document.writeln(`Загальна вартість всіх товарів заокруглена в меншу сторону (без врахування копійок): ${totalPriceWithoutPennies} грн <br>`);

const totalPriceUpToHundredth = Math.ceil(totalPriceWithoutPennies / 100) * 100;
document.writeln(`Загальна вартість всіх товарів заокруглена до сотень: ${totalPriceUpToHundredth} грн <br>`);

if ((totalPriceWithoutPennies % 2) === 0) {
    document.writeln(`${totalPriceWithoutPennies} грн - це парне число <br>`);
} else {
    document.writeln(`Число непарне <br>`);
}
const customerValue = 500;

const restOfTheMoney = customerValue - (priceMilk + priceCheese + priceIce);
document.writeln(`Сума решти при оплаті товарів: ${restOfTheMoney} грн <br>`);

const average = ( (priceMilk + priceCheese + priceIce) / 3).toFixed(2);
document.writeln(`Середнє значення цін становить: ${average} грн <br>`);
 
// const discount = Math.floor(Math.random() * 10);
const discount = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
document.writeln(`Знижка становить ${discount} % <br>`);

const monetaryDiscount = +((totalPrice * discount) / 100);
document.writeln(`Сума знижки в грошовому вимірі: ${monetaryDiscount} грн <br>`);

const priceWithDiscount = +(totalPrice - (totalPrice * discount / 100));
document.writeln(`Сума оплати із врахуванням знижки становить ${priceWithDiscount} грн <br>`);

const cost = +(totalPrice / 2);
document.writeln(`Собівартість товарів становить: ${cost} грн <br>`);

const netProfit = cost - monetaryDiscount;
document.writeln(`Чистий прибуток становить: ${netProfit} грн <br>`);