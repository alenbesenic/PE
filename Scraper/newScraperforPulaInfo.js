const puppeteer = require("puppeteer");
const fs = require("fs");

async function scrapeEventsUrls(url) {
    const browser = await puppeteer.launch({
        headless: true,
        args: ["--no-sandbox"]
    });
    const page = await browser.newPage();
    let allEventsUrls;

    try {
        await page.goto(url)

        const eventsUrls = await page.evaluate(() => {
            const selectAllUrls = document.querySelectorAll("#list-section > div");
            let urls = [];
            selectAllUrls.forEach((linkelement) => {
                const newUrl = linkelement.querySelector("a").href;
                urls.push(newUrl);
            })
            return urls;
        });
        allEventsUrls = {
            amount: eventsUrls.length,
            eventsUrls
        }
    } catch (e) {
        console.log("Error: ", e);
    }
    console.log(allEventsUrls);
    browser.close();
    return allEventsUrls;
}

scrapeEventsUrls("https://www.pulainfo.hr/hr/events");