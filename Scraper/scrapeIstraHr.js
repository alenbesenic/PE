const puppeteer = require("puppeteer")
const fs = require("fs")
const pulaInfoUrls = require("./scrapedFiles/pulaInfoUrls.json")
const pulaInfoHrjson = require("./scrapedFiles/eventsIstraHr.json")


async function scrapeEventsUrl(url) {
    const browser = await puppeteer.launch({
        headless: true,
        args: ["--no-sandbox"]
    });
    const page = await browser.newPage();
    let allPageUrls;

    try {
        await page.goto(url);

        const events = await page.evaluate(() => {
            const eventsUrls = document.querySelectorAll("#slider-cards0 > div > div > div > div > div.card-container ");
            let pageUrls = [];
            eventsUrls.forEach((linkelement) => {
                const eventPage = linkelement.querySelector("a").href;
                pageUrls.push(eventPage)
            })
            let noDuplicateUrls = pageUrls.reduce((current, next) => {
                if (current.indexOf(next) === -1) {
                    current.push(next)
                }
                return current
            }, []);
            return noDuplicateUrls;
        });
        allPageUrls = {
            events
        }
    } catch (e) {
        console.log(e);
    }
    fs.writeFile("./scrapedFiles/pulaInfoUrls.json",
        JSON.stringify(allPageUrls, null, 3), (err) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log("Success");
        })

    browser.close();
    return allPageUrls;
}

async function scrapeEventsOneByOne(url) {
    const browser = await puppeteer.launch({
        headless: true,
        args: ["--no-sandbox"]
    });
    const page = await browser.newPage();
    let events;

    try {
        await page.goto(url);

        const allEvents = await page.evaluate(() => {
            const event = document.querySelectorAll("#content > section > div.content-area > div > div > div > div > article")
            let eventAttributes;
            event.forEach((linkelement) => {
                const eventName = linkelement.querySelector("header > h1").innerText;
                const eventLocation = linkelement.querySelector("div > div > div:nth-child(1) > ul > li > p").innerText;
                const eventDate = linkelement.querySelector("div > div > div:nth-child(2) > ul > li").innerText.trim();
                const eventSite = linkelement.querySelector("div > div > div:nth-child(4) > ul > li").innerText;
                const eventDescription = linkelement.querySelector("div > div:nth-child(2) > div > p").innerText.trim();
                eventAttributes = {
                    Location: eventLocation,
                    Date: eventDate,
                    Description: eventDescription,
                    Event_Name: eventName,
                    Event_URL: eventSite,
                }
            })
            return eventAttributes;
        })
        events = {
            allEvents
        }
    } catch (e) {
        console.log(e);
    }

    pulaInfoHrjson.push(events)

    fs.writeFile("./scrapedFiles/eventsIstraHr.json",
        JSON.stringify(pulaInfoHrjson, null, 3), (err) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log("Success");
        }
    )
    console.log(events);
    browser.close();
    return events;
}

scrapeEventsUrl("https://www.istra.hr/en/destinations/pula/events");
pulaInfoUrls.events.forEach((link) => {
    scrapeEventsOneByOne(link)
})