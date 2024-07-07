import { DBConnection } from "../db-connection";
import { parseFlight } from "./parse-flight";

export async function storeFlights(flights: { [key: string]: any }, db: DBConnection) {
  const tasks = [];
  for (const flightKey in flights) {
    const flightData = parseFlight(flights[flightKey]);
    tasks.push(db.createDocument("flight", flightData, flightKey));
  }
  return await Promise.all(tasks);
}
