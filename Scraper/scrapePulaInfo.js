const puppeteer = require("puppeteer")
const fs = require("fs")
const json = require("./events.json")

async function scrape(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url)

    var events = await page.evaluate(() => {
        var eventDate = document.querySelector("#eventModal > div > div > div.modal-body > div.modal-info > span.date").innerText.trim();
        //var eventPrice = document.querySelector("#eventModal > div > div > div.modal-body > div.modal-info > span.ticket").innerText;
        var eventAddres = document.querySelector("#eventModal > div > div > div.modal-body > div.modal-info > span.place").innerText;
        var eventDesc = document.querySelector("#eventModal > div > div > div.modal-body > div.row.modal-description > p.modal-description-text").innerText.trim().replace(/(\r\n|\n|\r)/gm, "");
        var eventImage = document.querySelector("#accommodationCarousel1 > div > div > img").src;
        var newEvents = {
            Location: eventAddres,
            Date: eventDate,
            Description: eventDesc,
            Event_Name: 'Izložba oldtimera u organizaciji Županijskog oldtimer saveza, Forum, 10 – 13 h',
            //Event_Price: eventPrice,
            Event_URL: 'https://www.pulainfo.hr/hr/event/izlozba-oldtimera-u-organizaciji-zupanijskog-oldtimer-saveza-forum-10-13-h',
            Category: 'Outdoor',
            Status: 'Ongoing',
            PictureURL: eventImage,
        };
        return newEvents;
    })

    json.push(events)

    fs.writeFile("./scrapedFiles/eventsPulaInfo.json",
        JSON.stringify(json, null, 3), (err) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log("Success");
        })
    console.log(events);
    browser.close();
}

scrape("https://www.pulainfo.hr/hr/event/izlozba-oldtimera-u-organizaciji-zupanijskog-oldtimer-saveza-forum-10-13-h");