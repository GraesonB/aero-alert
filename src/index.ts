import dotenv from "dotenv";
import moment from "moment";
import puppeteer from "puppeteer";
import { DBConnection } from "./db-connection";
import { storeFlights } from "./utils/store-flights";
import { storeLocations } from "./utils/store-locations";
import { storeTrips } from "./utils/store-trips";

dotenv.config();

const DEPART = "YYC";
const ARRIVE = "TYO";
const START_DATE = "2024-06-30";
// const PROXY = "http://p.webshare.io:80";

async function handleAeroplanResponse(resJson: { [key: string]: any }, db: DBConnection) {
  const { location: locations, flight: flights } = resJson.dictionaries;
  console.log("Storing locations");
  await storeLocations(locations, db);
  console.log("Storing flights");
  await storeFlights(flights, db);

  const { airBoundGroups } = resJson.data;
  console.log("Storing trips");
  await storeTrips(airBoundGroups, flights, db);
}

async function run() {
  const db = new DBConnection();
  await db.init();
  const browser = await puppeteer.launch({
    headless: false,
    // args: [`--proxy-server=${PROXY}`],
  });

  const proxyUser = process.env.PROXY_USER;
  const proxyPass = process.env.PROXY_PASS;

  if (!proxyPass || !proxyUser) {
    console.error("missing credentials");
    await browser.close();
    return;
  }
  console.log("Creating new page");
  const page = await browser.newPage();
  // console.log("Authenticating");
  // await page.authenticate({ username: proxyUser, password: proxyPass });

  let departureDate = moment(START_DATE, "YYYY-MM-DD");
  for (let i = 0; i < 365; i++) {
    const departureDateString = departureDate.format("YYYY-MM-DD");
    console.log(`Finding flights (${DEPART} TO ${ARRIVE}) [${departureDateString}]`);
    await page.goto(
      `https://www.aircanada.com/aeroplan/redeem/availability/outbound?org0=${DEPART}&dest0=${ARRIVE}&departureDate0=${departureDateString}&ADT=1&YTH=0&CHD=0&INF=0&INS=0&lang=en-CA&tripType=O&marketCode=INT`
    );
    console.log(`Waiting for air-bounds response`);
    const response = await page.waitForResponse(
      (response) =>
        response.url().includes("air-bounds") && response.request().method() == "POST"
    );
    console.log(`Air-bounds response: ${response.status()}`);
    const resJson = await response.json();
    console.log(`Storing flight data`);
    await handleAeroplanResponse(resJson, db);

    console.log(`Finished ${departureDateString}`);
    departureDate.add(1, "day");
  }

  await browser.close();
  await db.close();
}

run().catch(console.error);
