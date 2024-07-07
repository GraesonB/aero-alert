import { RecordId } from "surrealdb.js";

declare global {
  namespace Aeroplan {
    export type FlightId = string;
    export type Flight = {
      marketing_airline_code: string;
      operating_airline_code: string;
      operating_airline_name: string;
      marketing_flight_number: string;
      departure: {
        location: RecordId;
        datetime: Date;
        terminal?: string;
      };
      arrival: {
        location: RecordId;
        datetime: Date;
        terminal?: string;
      };
      is_open_segment: boolean;
      secure_flight_indicator: boolean;
      duration: number;
    };
  }
}
