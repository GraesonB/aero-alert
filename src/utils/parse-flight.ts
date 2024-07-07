import { RecordId } from "surrealdb.js";

export function parseFlight(flight: { [key: string]: any }): Aeroplan.Flight {
  const parsedFlight: Aeroplan.Flight = {
    marketing_airline_code: flight.marketingAirlineCode,
    operating_airline_code: flight.operatingAirlineCode,
    operating_airline_name: flight.operatingAirlineName,
    marketing_flight_number: flight.marketingFlightNumber,
    departure: {
      location: new RecordId("location", flight.departure.locationCode),
      datetime: new Date(flight.departure.dateTime),
      terminal: flight.departure.terminal,
    },
    arrival: {
      location: new RecordId("location", flight.arrival.locationCode),
      datetime: new Date(flight.arrival.dateTime),
      terminal: flight.arrival.terminal,
    },
    is_open_segment: flight.isOpenSegment,
    secure_flight_indicator: flight.secureFlightIndicator,
    duration: flight.duration,
  };
  return parsedFlight;
}
