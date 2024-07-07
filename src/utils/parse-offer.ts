import { RecordId } from "surrealdb.js";

export function parseOffer(
  offer: { [key: string]: any },
  tripId: Aeroplan.TripId
): Aeroplan.Offer {
  const pointsCost = offer.prices.milesConversion.convertedMiles.base;
  const tax = Math.floor(offer.prices.milesConversion.convertedMiles.totalTaxes / 100);

  let ecoPercent = 0;
  let ecoPremiumPercent = 0;
  let businessPercent = 0;
  let seats_left = 0;
  offer.availabilityDetails.forEach(
    (flight: {
      cabin: "eco" | "ecoPremium" | "business";
      quota: number;
      mileagePercentage: number;
    }) => {
      seats_left = Math.min(flight.quota, seats_left);
      switch (flight.cabin) {
        case "eco":
          ecoPercent += flight.mileagePercentage;
          break;
        case "ecoPremium":
          ecoPremiumPercent += flight.mileagePercentage;
          break;
        case "business":
          businessPercent += flight.mileagePercentage;
          break;
      }
    }
  );

  const parsedOffer: Aeroplan.Offer = {
    air_bound_id: offer.airBoundId,
    fare_family_code: offer.fareFamilyCode,
    cheapest: offer.isCheapestOffer ?? false,
    points_cost: pointsCost,
    tax: tax,
    seats_left: seats_left,
    percent_eco: ecoPercent,
    percent_eco_premium: ecoPremiumPercent,
    percent_business: businessPercent,
    trip: new RecordId("trip", tripId),
  };
  return parsedOffer;
}
