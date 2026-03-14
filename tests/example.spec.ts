

import {test,expect} from '@playwright/test';


test ('to check the wait are working', async ({page}) => {

    await page.goto('https://www.hyrtutorials.com/p/waits-demo.html');

    // This code is belong to 1st textbox
    await page.locator('#btn1').click();

    await page.waitForTimeout(5000);
    await page.getByPlaceholder('Textbox1').first().fill('hey sanjay i am activating after 5 seconds');
    //await expect(page).getByRole('textbox', { name: 'txt1' })).toBeVisible();
                          
    //this code is belong to 2nd textbox
    await page.locator('#btn2').click();

    await page.waitForTimeout(10000);
    await page.locator('#txt2').first().fill('hey sanjay 10 seconds box is opened');

    
    console.log('test case is passed');

  });


