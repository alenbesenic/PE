const puppeteer = require("puppeteer");

const pageURL = "https://www.pulainfo.hr/hr/events";

const webscraping = async pageURL => {
    const browser = await puppeteer.launch({
        headless: true,
        args: ["--no-sandbox"]
    });
    const page = await browser.newPage();
    let dataObj = {};

    try {
        await page.goto(pageURL);

        const publishedNews = await page.evaluate(() =>{
            const newsDOM = document.querySelectorAll("#list-section > ul > li");
            let newsList = [];
            newsDOM.forEach(linkElement =>{
                const currentNews =linkElement.querySelector("a")
                .innerText;
                newsList.push(currentNews);
            });
            return newsList;
        });
        dataObj= {
            amount: publishedNews.length,
            publishedNews
        };
    }catch (e){
        console.log(e);
    }
    console.log(dataObj)
    browser.close();
    return dataObj;
};

webscraping(pageURL).catch(console.error);

