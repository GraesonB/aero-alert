function parseFlight(flight: { [key: string]: any }): Aeroplan.Flight {
  const parsedFlight: Aeroplan.Flight = {
    marketing_airline_code: flight.marketingAirlineCode,
    operating_airline_code: flight.operatingAirlineCode,
    marketing_flight_number: flight.marketingFlightNumber,
    departure: {
      location: flight.departure.locationCode,
      datetime: flight.departure.dateTime,
      terminal: flight.departure.terminal,
    },
    arrival: {
      location: flight.arrival.locationCode,
      datetime: flight.arrival.dateTime,
      terminal: flight.arrival.terminal,
    },
    is_open_segment: flight.isOpenSegment,
    secure_flight_indicator: flight.secureFlightIndicator,
  };

  return parsedFlight;
}
