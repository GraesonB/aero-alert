namespace Aeroplan {
  export type OfferId = string;

  export type Offer = {
    fare_family_code: string;
    cheapest: boolean;
    points_cost: number;
    tax: number;
    seats_left: number;
    percent_eco: number;
    percent_eco_premium: number;
    percent_business: number;
    trip: TripId;
  };
}
