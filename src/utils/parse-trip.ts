import { RecordId } from "surrealdb.js";
import { v4 as uuidv4 } from "uuid";

export function parseTripId(
  boundDetails: { [key: string]: any },
  tripDate: Date
): Aeroplan.TripId {
  const parsedTripId: Aeroplan.TripId = {
    uuid: uuidv4(),
    origin: new RecordId("location", boundDetails.originLocationCode),
    destination: new RecordId("location", boundDetails.destinationLocationCode),
    scrape_date: new Date(),
    trip_date: tripDate,
  };

  return parsedTripId;
}

export function parseTrip(boundDetails: { [key: string]: any }): Aeroplan.Trip {
  let segments = [];
  for (const segment of boundDetails.segments) {
    segment["flight"] = new RecordId("flight", segment["flightId"]);
    delete segment["flightId"];
    segments.push(segment);
  }
  const parsedTrip: Aeroplan.Trip = {
    duration: boundDetails.duration,
    segments,
  };

  return parsedTrip;
}
