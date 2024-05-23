import puppeteer from "puppeteer";

const DEPART = "YYC";
const ARRIVE = "TYO";
const DEPARTURE_DATE = "2024-06-11";

async function run() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  page.on("request", (request) => {
    const url = request.url();
  });

  await page.goto(
    `https://www.aircanada.com/aeroplan/redeem/availability/outbound?org0=${DEPART}&dest0=${ARRIVE}&departureDate0=${DEPARTURE_DATE}&ADT=1&YTH=0&CHD=0&INF=0&INS=0&lang=en-CA&tripType=O&marketCode=INT`
  );
  console.log(await page.title());
  await browser.close();
}

run().catch(console.error);
