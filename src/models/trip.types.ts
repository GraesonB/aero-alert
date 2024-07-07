import { RecordId } from "surrealdb.js";

declare global {
  namespace Aeroplan {
    export type TripId = {
      uuid: string;
      origin: RecordId;
      destination: RecordId;
      scrape_date: Date;
      trip_date: Date;
    };
    export type Trip = {
      duration: number;
      segments: {
        flight: RecordId;
        connection_time?: Date;
        arrival_days_difference?: number;
      }[];
    };
  }
}
