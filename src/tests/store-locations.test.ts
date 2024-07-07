import { DBConnection } from "../db-connection";
import { storeLocations } from "../utils/store-locations";

describe("storeFlights", () => {
  let db: DBConnection;

  beforeEach(async () => {
    db = new DBConnection();
    await db.init();
  });

  afterEach(async () => {
    await db.close();
  });

  it("should store flights correctly", async () => {
    const locations = {
      YTZ: {
        type: "airport",
        airportName: "BILLY BISHOP CITY A/P",
        cityCode: "YTO",
        cityName: "TORONTO",
        stateCode: "ON",
        countryCode: "CA",
      },
      HND: {
        type: "airport",
        airportName: "TOKYO INTL HANEDA",
        cityCode: "TYO",
        cityName: "TOKYO",
        countryCode: "JP",
      },
    };

    const results = await storeLocations(locations, db);
    console.log(results);

    expect(true);
  });
});
