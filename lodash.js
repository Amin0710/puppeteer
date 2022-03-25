const _ = require('lodash');
const array = [
    {
        "id": 162429,
        "productReferenceId": 171468,
        "name": "Blackmores Bio C 500mg Chewable Tablets 125 pack",
        "productUrl": "https://shop.coles.com.au/a/national/product/blackmores-tablets-bio-c-chewable-500mg-value-pack",
        "size": "125pk",
        "matchType": "Identical",
        "price": 16,
        "score": 100,
        "productReferenceUrl": "https://www.woolworths.com.au/shop/productdetails/86565/blackmores-bio-c-chewable-500",
        "imageurl": "https://shop.coles.com.au/wcsstore/Coles-CAS/images/9/6/8/9688926-th.jpg",
        "quantity": 1
    },
    {
        "id": 177229,
        "productReferenceId": 188686,
        "name": "Dynamo Profession Odour Eliminator Liquid 1.8L on special",
        "productUrl": "https://shop.coles.com.au/a/national/product/dynamo-prof-l-liquid-odour-eliminator",
        "size": "1.8L",
        "matchType": "similar",
        "price": 20,
        "score": 94.39,
        "productReferenceUrl": "https://www.woolworths.com.au/shop/productdetails/87733/dynamo-professional-odour-eliminating-laundry-detergent-liquid",
        "imageurl": "https://shop.coles.com.au/wcsstore/Coles-CAS/images/3/7/7/3774355-th.jpg",
        "quantity": 1
    },
    {
        "id": 153864,
        "productReferenceId": 192174,
        "name": "Oz Group Australian Frozen Blueberries 250g on special",
        "productUrl": "https://shop.coles.com.au/a/national/product/frozen-blueberries",
        "size": "250g",
        "matchType": "similar",
        "price": 5,
        "score": 94.39,
        "productReferenceUrl": "https://www.woolworths.com.au/shop/productdetails/189466/just-caught-frozen-australian-snapper",
        "imageurl": "https://shop.coles.com.au/wcsstore/Coles-CAS/images/3/9/2/3928754-th.jpg",
        "quantity": 1
    },
    {
        "id": 136050,
        "productReferenceId": 136941,
        "name": "Tassal Smoked Tassie Salmon 150g",
        "productUrl": "https://shop.coles.com.au/a/national/product/tassal-tasmanian-smoked-salmon-150g",
        "size": "150g",
        "matchType": "Identical",
        "price": 9,
        "score": 100,
        "productReferenceUrl": "https://www.woolworths.com.au/shop/productdetails/847049/tassal-smoked-salmon",
        "imageurl": "https://shop.coles.com.au/wcsstore/Coles-CAS/images/3/4/7/3477054-th.jpg",
        "quantity": 1
    },
    {
        "id": 143889,
        "productReferenceId": 140468,
        "name": "Latina Fresh Ricotta & Spinach Agnolotti 625g",
        "productUrl": "https://shop.coles.com.au/a/national/product/latina-fresh-agnolotti-ricotta-spinach",
        "size": "625g",
        "matchType": "Identical",
        "price": 8,
        "score": 100,
        "productReferenceUrl": "https://www.woolworths.com.au/shop/productdetails/44977/latina-fresh-spinach-ricotta-agnolotti",
        "imageurl": "https://shop.coles.com.au/wcsstore/Coles-CAS/images/5/4/6/5469181-th.jpg",
        "quantity": 1
    },
    {
        "id": 156290,
        "productReferenceId": 140302,
        "name": "Coles Asia Hokkien Ready to Eat Noodles 2 Pack 400g everyday product",
        "productUrl": "https://shop.coles.com.au/a/national/product/coles-asia-hokkien-nodles",
        "size": "400g",
        "matchType": "similar",
        "price": 1.85,
        "score": 95,
        "productReferenceUrl": "https://www.woolworths.com.au/shop/productdetails/145566/fantastic-fresh-noodles-hokkien",
        "imageurl": "https://shop.coles.com.au/wcsstore/Coles-CAS/images/3/7/2/3725327-th.jpg",
        "quantity": 1
    },
    {
        "id": 143905,
        "productReferenceId": 185268,
        "name": "Latina Fresh Creamy Sundried Tomato Pasta Sauce 425g",
        "productUrl": "https://shop.coles.com.au/a/national/product/latina-fresh-pasta-sauce-creamy-sundried-tomato",
        "size": "425g",
        "matchType": "Identical",
        "price": 6,
        "score": 100,
        "productReferenceUrl": "https://www.woolworths.com.au/shop/productdetails/14894/latina-fresh-creamy-sundried-tomato-pasta-sauce",
        "imageurl": "https://shop.coles.com.au/wcsstore/Coles-CAS/images/6/0/2/6026890-th.jpg",
        "quantity": 1
    },
    {
        "id": 143911,
        "productReferenceId": 186409,
        "name": "Rana Pumpkin & Caramelised Onion Ravioli 325g on special",
        "productUrl": "https://shop.coles.com.au/a/national/product/rana-ravioli-pumpkin-caramelised-onion",
        "size": "325g",
        "matchType": "similar",
        "price": 7,
        "score": 94.39,
        "productReferenceUrl": "https://www.woolworths.com.au/shop/productdetails/810775/rana-pumpkin-onion-ravioli-pasta",
        "imageurl": "https://shop.coles.com.au/wcsstore/Coles-CAS/images/3/0/9/3091148-th.jpg",
        "quantity": 1
    },
    {
        "id": 176033,
        "productReferenceId": 197412,
        "name": "Chobani Mango Greek Yogurt Pouch 140g on special",
        "productUrl": "https://shop.coles.com.au/a/national/product/yogurt-pouch-140g",
        "size": "140g",
        "matchType": "similar",
        "price": 1.7,
        "score": 94.39,
        "productReferenceUrl": "https://www.woolworths.com.au/shop/productdetails/768123/chobani-strawberry-greek-yogurt-pouch-greek-yoghurt-pouch",
        "imageurl": "https://shop.coles.com.au/wcsstore/Coles-CAS/images/4/3/4/4348975-th.jpg",
        "quantity": 1
    },
    {
        "id": 176033,
        "productReferenceId": 197409,
        "name": "Chobani Mango Greek Yogurt Pouch 140g on special",
        "productUrl": "https://shop.coles.com.au/a/national/product/yogurt-pouch-140g",
        "size": "140g",
        "matchType": "similar",
        "price": 1.7,
        "score": 94.39,
        "productReferenceUrl": "https://www.woolworths.com.au/shop/productdetails/795069/chobani-raspberry-greek-yogurt-pouch-yoghurt-pouch",
        "imageurl": "https://shop.coles.com.au/wcsstore/Coles-CAS/images/4/3/4/4348975-th.jpg",
        "quantity": 1
    },
    {
        "id": 176033,
        "productReferenceId": 197418,
        "name": "Chobani Mango Greek Yogurt Pouch 140g on special",
        "productUrl": "https://shop.coles.com.au/a/national/product/yogurt-pouch-140g",
        "size": "140g",
        "matchType": "similar",
        "price": 1.7,
        "score": 94.39,
        "productReferenceUrl": "https://www.woolworths.com.au/shop/productdetails/687255/chobani-watermelon-greek-yogurt-limited-batch-pouch",
        "imageurl": "https://shop.coles.com.au/wcsstore/Coles-CAS/images/4/3/4/4348975-th.jpg",
        "quantity": 1
    },
    {
        "id": 194315,
        "productReferenceId": 197674,
        "name": "Mainland Cheese Lavosh Crackers Caramelised Onion 36g",
        "productUrl": "https://shop.coles.com.au/shop/productdetails/176903/mainland-cheese-lavosh-crackers-caramelised-onion",
        "size": "36g",
        "matchType": "similar",
        "price": 2.5,
        "score": 94.39,
        "productReferenceUrl": "https://www.woolworths.com.au/shop/productdetails/193827/mainland-cheese-lavosh-crackers-mixed-berry-poppy-seed-pepita",
        "imageurl": "https://shop.coles.com.auhttps://cdn0.woolworths.media/content/wowproductimages/medium/176903.jpg",
        "quantity": 1
    },
    {
        "id": 155626,
        "productReferenceId": 156226,
        "name": "Impressed Summer Greens Juice 325mL",
        "productUrl": "https://shop.coles.com.au/a/national/product/impressed-summer-greens-juice",
        "size": "325mL",
        "matchType": "Identical",
        "price": 3.6,
        "score": 100,
        "productReferenceUrl": "https://www.woolworths.com.au/shop/productdetails/843719/impressed-cold-pressed-juice-summer-greens",
        "imageurl": "https://shop.coles.com.au/wcsstore/Coles-CAS/images/2/8/0/2804870-th.jpg",
        "quantity": 1
    },
    {
        "id": 136462,
        "productReferenceId": 187926,
        "name": "Yarra Valley Cheese Goats Cheese 120g",
        "productUrl": "https://shop.coles.com.au/a/national/product/coles-deli-yarra-valley-goats-cheese",
        "size": "120g",
        "matchType": "similar",
        "price": 6.5,
        "score": 94.39,
        "productReferenceUrl": "https://www.woolworths.com.au/shop/productdetails/638913/yarra-valley-cheese-salted-honey-cow",
        "imageurl": "https://shop.coles.com.au/wcsstore/Coles-CAS/images/2/2/4/2244582-th.jpg",
        "quantity": 1
    },
    {
        "id": 155549,
        "productReferenceId": 155862,
        "name": "Original Juice Co. Black Label Chilled Orange Juice 600mL",
        "productUrl": "https://shop.coles.com.au/a/national/product/original-black-label-juice-orange-chilled",
        "size": "600mL",
        "matchType": "Identical",
        "price": 3.5,
        "score": 100,
        "productReferenceUrl": "https://www.woolworths.com.au/shop/productdetails/159977/original-juice-orange-juice",
        "imageurl": "https://shop.coles.com.au/wcsstore/Coles-CAS/images/8/8/1/8818094-th.jpg",
        "quantity": 1
    },
    {
        "id": 189654,
        "productReferenceId": 195976,
        "name": "Remedy Shot Immune Plus",
        "productUrl": "https://shop.coles.com.au/a/national/product/immune-plus",
        "size": "60mL",
        "matchType": "similar",
        "price": 3,
        "score": 94.39,
        "productReferenceUrl": "https://www.woolworths.com.au/shop/productdetails/178116/remedy-immune-plus-vitamins-lemon-lime-shot",
        "imageurl": "https://shop.coles.com.au/wcsstore/Coles-CAS/images/4/4/7/4471440-th.jpg",
        "quantity": 1
    }
]


// const newArray = _.sortBy(array, ["matchType": "Identical"]);


const customSort = function(key){
    return (a,b) => (a[key]>b[key]) ? 1 : (b[key]>a[key]) ? -1 : 0;
};
const newArray = array.sort(customSort('score'));

// const newArray = _.sortBy(array,'matchType');

console.log(newArray);
