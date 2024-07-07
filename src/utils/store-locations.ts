import { DBConnection } from "../db-connection";
import { parseLocation } from "./parse-location";

export async function storeLocations(
  locations: { [key: string]: any },
  db: DBConnection
) {
  const tasks = [];
  for (const locationKey in locations) {
    const locationData = parseLocation(locations[locationKey]);
    tasks.push(db.createDocument("location", locationData, locationKey));
  }
  return await Promise.all(tasks);
}
