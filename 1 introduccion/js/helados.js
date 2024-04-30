
//values from inputs fields
const robertoMoney = document.querySelector("#robertoMoney");
const pedroMoney = document.querySelector("#pedroMoney");
const coflaMoney = document.querySelector("#coflaMoney");

//table from products fields
const tableProduct = document.querySelector(".table-icecream").getElementsByTagName("td");

//button calculate the ice cream most expensive that each child should buy
const buttonMoney  = document.querySelector("#buttonMoney");

//fragment
const fragment = document.createDocumentFragment();

//results from problem
const result = document.querySelector("#result");


let products ={}

// Iterate over all td cells in the table with the class "table-icecream"
for (let i = 0; i < tableProduct.length; i++) {
     // Check if the index is odd (price index)
    if (i % 2 === 1) {
        let product = tableProduct[i-1].textContent;
        let priceProduct = parseFloat(tableProduct[i].textContent.replace("USD",""));
        products[product] = priceProduct;
    }
}


buttonMoney.addEventListener("click", function(){
    if(robertoMoney.value !=null && pedroMoney.value != null && coflaMoney.value != null){
        let roberto = parseFloat(robertoMoney.value).toFixed(2);
        let pedro = parseFloat(pedroMoney.value).toFixed(2);
        let cofla = parseFloat(coflaMoney.value).toFixed(2);

        let moneyChild = {roberto, pedro, cofla};

        for (let moneyC in moneyChild) {
            let productExpensive = "Ninguno";
            let priceExpensive = 0;
            let changePriceExpensive = 0;
            for (let product in products) {
                if (products[product] <= moneyChild[moneyC] && priceExpensive != products[product]){
                    productExpensive = product;
                    priceExpensive = products[product];
                    changePriceExpensive = moneyChild[moneyC] - priceExpensive;
                }else if (priceExpensive == products[product]) {
                    productExpensive = "<li>" + productExpensive.concat(`<li>${product} </li>`+"</li>");
                    changePriceExpensive -= priceExpensive;
                }
            }
            const item = document.createElement("P");
            item.innerHTML = `<b>${moneyC} can bought </b>: <br> ${productExpensive} and her change is ${changePriceExpensive.toFixed(2)}`;
            fragment.appendChild(item);
        }
        result.innerHTML = "";
        result.appendChild(fragment);
    }
});

