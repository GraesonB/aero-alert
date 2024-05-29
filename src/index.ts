import dotenv from "dotenv";
import puppeteer from "puppeteer";
dotenv.config();

const DEPART = "YYC";
const ARRIVE = "TYO";
const DEPARTURE_DATE = "2024-06-11";
const PROXY = "http://p.webshare.io:80";

async function run() {
  const browser = await puppeteer.launch({
    headless: false,
    args: [`--proxy-server=${PROXY}`],
  });

  const proxyUser = process.env.PROXY_USER;
  const proxyPass = process.env.PROXY_PASS;

  if (!proxyPass || !proxyUser) {
    console.error("missing credentials");
    await browser.close();
    return;
  }

  const page = await browser.newPage();
  await page.authenticate({ username: proxyUser, password: proxyPass });

  await page.goto(
    `https://www.aircanada.com/aeroplan/redeem/availability/outbound?org0=${DEPART}&dest0=${ARRIVE}&departureDate0=${DEPARTURE_DATE}&ADT=1&YTH=0&CHD=0&INF=0&INS=0&lang=en-CA&tripType=O&marketCode=INT`,
    {
      waitUntil: "networkidle0",
    }
  );

  const response = await page.waitForResponse(
    (response) =>
      response.url().includes("air-bounds") && response.request().method() == "POST"
  );
  const resJson = await response.json();
  console.log(resJson);
  await browser.close();
}

run().catch(console.error);
