const puppeteer = require('puppeteer')
const delay = require('delay');
const { devices } = puppeteer;
const iPhoneX = devices["iPhone X"];

(async () => {
  const browser = await puppeteer.launch({
    headless:false,
    args: ['defaultViewport: 1400,900','--window-size=400,825','--incognito','--no-default-browser-check','--disable-site-isolation-trials','--no-experiments','--ignore-gpu-blacklist','--ignore-certificate-errors','--ignore-certificate-errors-spki-list','--disable-gpu','--disable-extensions','--disable-default-apps','--enable-features=NetworkService','--disable-setuid-sandbox','--no-sandbox','--disable-webgl','--disable-threaded-animation','--disable-threaded-scrolling','--disable-in-process-stack-traces','--disable-histogram-customizer','--disable-gl-extensions','--disable-composited-antialiasing','--disable-canvas-aa','--disable-3d-apis','--disable-accelerated-2d-canvas','--disable-accelerated-jpeg-decoding','--disable-accelerated-mjpeg-decode','--disable-app-list-dismiss-on-blur','--disable-accelerated-video-decode']
});
  const pageList = await browser.pages();   
  const context = await browser.createIncognitoBrowserContext();  
  const page = await context.newPage();
 
console.log('====================================')
console.log('Auto Reff NFTSEA v1.0 by @allif.mh')
console.log('====================================')
  const ali2 = `https://cointool.app/createWallet/eth`;
  await page.emulate(iPhoneX);
  await page.goto(`${ali2}`,{waitUntil : 'networkidle2'});
console.log('1. sukses membuka eth generator')
  await page.waitForSelector('#app > div > div.main-container > section > div > div.createBox > div > div.inputBox > input',{timeout:100000})
  await page.type('#app > div > div.main-container > section > div > div.createBox > div > div.inputBox > input','1')
  await page.click('#app > div > div.main-container > section > div > div.createBox > div > div.inputBox > div > i')
  await page.waitForSelector('#app > div > div.main-container > section > div > div.scrollBox > div > div > div > div > div > div.inputBox > div:nth-child(1) > div.el-input-group__append > button > span', {setTimeout:100000})
  await page.click('#app > div > div.main-container > section > div > div.scrollBox > div > div > div > div > div > div.inputBox > div:nth-child(1) > div.el-input-group__append > button > span')
console.log('2. sukses generate eth')

//await input.focus()
await page.click('#app > div > div.main-container > section > div > div.scrollBox > div > div > div > div > div > div.inputBox > div:nth-child(1) > div.el-input-group__append > button')
const eth = await page.$eval('#app > div > div.main-container > section > div > div.scrollBox > div > div > div > div > div > div.inputBox > div:nth-child(1) > input', element => element.textContent)
console.log('3. menyimpan eth (temporary) ... selesai'+eth)
console.log('4. membuka reff nftsea ..')
  const page2 = await context.newPage();
  const twit = `https://nftsea.one/48T30O7`;
  await page2.emulate(iPhoneX);
  await page2.goto(`${twit}`,{timeout:100000});

 await autoScroll(page2);

const input2= await page2.$('#airdrop-form > div > input')
await input2.focus()
await page2.keyboard.down('ControlLeft');
await page2.keyboard.press('KeyV');
await page2.keyboard.up('ControlLeft');
console.log('5. input eth selesai')
await page2.waitForSelector('#airdrop-form > div > button', {timeout:100000})
console.log('6. submit ..')
await page2.click('#airdrop-form > div > button')
console.log('7. sukses !!!')
async function autoScroll(page){
    await page2.evaluate(async () => {
        await new Promise((resolve, reject) => {
            var totalHeight = 0;
            var distance = 120;
            var timer = setInterval(() => {
                var scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;

                if(totalHeight >= scrollHeight){
                    clearInterval(timer);
                    resolve();
                }
            }, 120);
        });
    });}
 
console.log('delay 10 menit')
await delay(100000);
 await browser.close()

})();
