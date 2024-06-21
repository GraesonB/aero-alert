function parseTripId(
  boundDetails: { [key: string]: any },
  tripDate: Date
): Aeroplan.TripId {
  const parsedTripId: Aeroplan.TripId = {
    origin: `location:${boundDetails.originLocationCode}`,
    destination: `location:${boundDetails.destinationLocationCode}`,
    scrape_date: new Date(),
    trip_date: tripDate,
  };

  return parsedTripId;
}

function parseTrip(boundDetails: { [key: string]: any }): Aeroplan.Trip {
  const parsedTrip: Aeroplan.Trip = {
    duration: boundDetails.duration,
    segments: [],
  };

  return parsedTrip;
}
