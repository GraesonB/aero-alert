namespace Aeroplan {
  export type TripId = {
    origin: LocationId;
    destination: LocationId;
    scrape_date: Date;
    trip_date: Date;
  };
  export type Trip = {
    duration: number;
    segments: {
      flight: FlightId;
      connection_time?: Date;
      arrival_days_difference?: number;
    }[];
  };
}
