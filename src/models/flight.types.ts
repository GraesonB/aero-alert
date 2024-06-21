namespace Aeroplan {
  export type FlightId = string;
  export type Flight = {
    marketing_airline_code: string;
    operating_airline_code: string;
    marketing_flight_number: string;
    departure: {
      location: LocationId;
      datetime: Date;
      terminal?: string;
    };
    arrival: {
      location: LocationId;
      datetime: Date;
      terminal?: string;
    };
    is_open_segment: boolean;
    secure_flight_indicator: boolean;
  };
}
