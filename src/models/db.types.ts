namespace Aeroplan {
  export type DocumentType = "flight" | "location" | "trip" | "offer";

  export interface DocumentMapping {
    flight: { id: Aeroplan.FlightId; document: Aeroplan.Flight };
    location: { id: Aeroplan.LocationId; document: Aeroplan.Location };
    trip: { id: Aeroplan.TripId; document: Aeroplan.Trip };
    offer: { id: Aeroplan.OfferId; document: Aeroplan.Offer };
  }
}
