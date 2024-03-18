import { expect, browser, $ } from '@wdio/globals'


describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await browser.url(`https://www.saucedemo.com/`)

        await $("[data-test='username']").setValue('standard_user')
        await $("[data-test='password']").setValue('secret_sauce')
        await $("[data-test='login-button']").click()

        await expect($('.app_logo')).toBeExisting()
        await expect($('.app_logo')).toHaveTextContaining(
            'Swag Labs')
    })

})


describe('Checkout', () => {
    it('should add products to cart and make checkout successfuly', async () => {

        await $("[data-test='add-to-cart-sauce-labs-backpack']").click()
        await $("[data-test='add-to-cart-sauce-labs-onesie']").click()
        await $("[data-test='add-to-cart-sauce-labs-fleece-jacket']").click()
        await $("[data-test='remove-sauce-labs-onesie']").click()
        await $(".shopping_cart_link").click()
        await $("[data-test='checkout']").click()

        await $("[data-test='firstName']").setValue('First Name')
        await $("[data-test='lastName']").setValue('Last Name')
        await $("[data-test='postalCode']").setValue('ZIPXXX')
        await $("[data-test='continue']").click()
    
    
        await expect($('.title')).toBeExisting()
        await expect($('.title')).toHaveTextContaining(
            'Checkout: Overview')

        await $("[data-test='finish']").click()

        await expect($('.complete-header')).toBeExisting()
        await expect($('.complete-header')).toHaveTextContaining(
            'Thank you for your order!')

        await $("[data-test='back-to-products']").click()
        
        await $(".bm-burger-button").click()
        await expect($("#react-burger-cross-btn")).toBeExisting()
        await $("#react-burger-cross-btn").click()


    })

})



describe('My Login application', () => {
    it('should be in descending order', async () => {
        await browser.url(`https://www.saucedemo.com/`)
        
        await $("[data-test='username']").setValue('standard_user')
        await $("[data-test='password']").setValue('secret_sauce')
        await $("[data-test='login-button']").click()

        await $("[data-test='product_sort_container']").click()
        await $("[value='hilo']").click()
                
        const priceElementList = await $$('.inventory_item_price');
        const priceList = []
        
        for (const priceElement of priceElementList) {
            const priceText = await priceElement.getText()
            

            const precoNumerico = parseFloat(priceText.replace('$', '').replace(',', '.'));

            priceList.push(precoNumerico);
            
            console.log(priceList);
        }


        let hiToLow = true;
        
        for (let i = 1; i < priceList.length; i++) {
            if (priceList[i] > priceList[i - 1]) {
                hiToLow = false;
                break;
                }
        }

        if (hiToLow) {
            console.log('Prices are in descending order.');
        } else {
            console.log('Prices are not in descending order.');
        }
        

          
    })

})



