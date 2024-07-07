import { DBConnection } from "../db-connection";
import { parseOffer } from "./parse-offer";
import { parseTrip, parseTripId } from "./parse-trip";

export async function storeTrips(
  airBoundGroups: { [key: string]: any }[],
  flights: { [key: string]: any },
  db: DBConnection
) {
  let tasks = [];
  for (const { boundDetails, airBounds } of airBoundGroups) {
    const departureFlightId = boundDetails.segments[0].flightId;
    const departureDate = new Date(flights[departureFlightId].departure.dateTime);
    const tripId = parseTripId(boundDetails, departureDate);
    const trip = parseTrip(boundDetails);
    await db.createDocument("trip", trip, tripId);
    for (const airbound of airBounds) {
      const offerId = airbound.airBoundId;
      const offer = parseOffer(airbound, tripId);
      tasks.push(db.createDocument("offer", offer));
    }
  }
  return await Promise.all(tasks);
}
