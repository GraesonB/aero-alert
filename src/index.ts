import puppeteer from "puppeteer";

const DEPART = "YYC";
const ARRIVE = "TYO";
const DEPARTURE_DATE = "2024-06-11";

async function run() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setRequestInterception(true);

  page.on("request", (request) => {
    const url = request.url();
    if (url.includes("air-bounds")) {
      console.log("Intercepted air-bounds request");
    }
    request.continue();
  });

  page.on("response", (response) => {
    const url = response.url();
    if (url.includes("air-bounds")) {
      const status = response.status();
      const headers = response.headers();
      const responseBody = response.text();
      console.log(responseBody);
    }
  });

  await page.goto(
    `https://www.aircanada.com/aeroplan/redeem/availability/outbound?org0=${DEPART}&dest0=${ARRIVE}&departureDate0=${DEPARTURE_DATE}&ADT=1&YTH=0&CHD=0&INF=0&INS=0&lang=en-CA&tripType=O&marketCode=INT`,
    {
      waitUntil: "networkidle0",
    }
  );
  console.log(await page.title());
  await browser.close();
}

run().catch(console.error);
