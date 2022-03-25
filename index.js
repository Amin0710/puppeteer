const puppeteer = require("puppeteer");

(async() => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto("https://www.woolworths.com.au/");
    //await page.screenshot({path: "screenshort.png"});
    const meatSeafood= await page.waitForXPath(`//*[@id="wx-pies-1_D5A2236"]`);
    await meatSeafood.click(meatSeafood);
    const meat= await page.waitForXPath(`//*[@id="adaptiveCategoryHeader-menu"]/div[2]/shared-mega-menu-navigation[1]/nav/ul/li[3]/a/span`);
    await meat.click();
    const showAllMeat= await page.waitForXPath(`//*[@id="adaptiveCategoryHeader-menu"]/div[2]/shared-mega-menu-navigation[2]/nav/ul/li[1]/a/span`);
    await showAllMeat.click();
    await page.waitForTimeout(3000);
    const grabProducts = await page.evaluate(() => {
        const products = document.querySelectorAll(".ng-tns-c347-4.ng-trigger.ng-trigger-staggerFadeInOut.product-grid .shelfProductTile-description a");
        let productArr = [];
        let i=1;
        products.forEach(tag => {
            productArr.push(i+' '+tag.innerText)
            i++;            
        });
        return productArr;
    });
    console.log(grabProducts);

    //await browser.close();
})();